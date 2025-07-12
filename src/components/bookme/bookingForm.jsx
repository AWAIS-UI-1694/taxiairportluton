import React, { useState, useEffect } from "react";
import { format, addHours } from "date-fns";
import axios from "axios";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  FaPlane,
  FaPlus,
  FaUsers,
  FaLuggageCart,
  FaTimes,
} from "react-icons/fa";
import ViaModal from "./ViaModal";
import AirportModal from "./AirportModal";
import LuggageModal from "./LuggageModal";
import WaitTimeModal from "./WaitTimeModal";
import ItemCountModal from "./ItemCountModal";

const BookingForm = () => {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [viaFields, setViaFields] = useState([]);
  const [isViaModalOpen, setIsViaModalOpen] = useState(false);
  const [validAddresses, setValidAddresses] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [journeyType, setJourneyType] = useState("Single Trip");
  const [waitingTime, setWaitingTime] = useState(0);
  const [luggage, setLuggage] = useState([]);
  const [isLuggageModalOpen, setIsLuggageModalOpen] = useState(false);
  const [isWaitModalOpen, setIsWaitModalOpen] = useState(false);
  const [isItemCountModalOpen, setIsItemCountModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fromDoorNo, setFromDoorNo] = useState("");
  const [toDoorNo, setToDoorNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPickupAirportModalOpen, setIsPickupAirportModalOpen] =
    useState(false);
  const [isDropoffAirportModalOpen, setIsDropoffAirportModalOpen] =
    useState(false);

  const maxFields = 7;

  useEffect(() => {
    initializeDateTime();
    axios
      .post("https://stationcarslondon.com/api/VisitWeb", {
        weburl: "https://www.taxiairportluton.co.uk/",
        webname: "Taxi Airport Luton",
        officeCode: "LTX",
        officeNumber: "02037403527",
      })
      .catch((error) => console.error("Error posting visit data:", error));
  }, []);

  const initializeDateTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    const minutesToNextQuarter = 15 - (minutes % 15);

    if (minutesToNextQuarter < 15 && minutesToNextQuarter !== 0) {
      minutes += minutesToNextQuarter;
      if (minutes >= 60) {
        hours += 1;
        minutes = 0;
      }
    } else {
      minutes += 15;
      if (minutes >= 60) {
        hours += 1;
        minutes = 0;
      }
    }

    const formattedDate = format(today, "yyyy-MM-dd");
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    setDate(formattedDate);
    setTime(formattedTime);
  };

  const loadOptions = async (search, loadedOptions) => {
    try {
      const response = await axios.get(
        "https://booking.londontaxi247.co.uk/Home/Indextwo",
        {
          params: { Prefix: search },
        }
      );
      const addresses = response.data.list.map((item) => ({
        value: item.address,
        label: item.address,
      }));
      setValidAddresses((prev) => [
        ...new Set([...prev, ...addresses.map((a) => a.value)]),
      ]);
      return {
        options: addresses,
        hasMore: false,
      };
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return { options: [], hasMore: false };
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = format(new Date(), "yyyy-MM-dd");
    if (selectedDate < today) {
      alert("Do Not Select the Previous Date");
      setDate(today);
    } else {
      setDate(selectedDate);
    }
  };

  const handleJourneyTypeChange = (e) => {
    const value = e.target.value;
    setJourneyType(value);
    if (value === "WR") {
      setIsWaitModalOpen(true);
    } else {
      setWaitingTime(0);
    }
  };

  const handleAddLuggage = (item, type) => {
    setSelectedItem({ name: item, type });
    setIsItemCountModalOpen(true);
  };

  const handleSaveItemCount = (quantity) => {
    if (selectedItem) {
      const existingItem = luggage.find(
        (item) => item.name === selectedItem.name
      );
      if (existingItem) {
        setLuggage((prev) =>
          prev.map((item) =>
            item.name === selectedItem.name
              ? {
                  ...item,
                  quantity,
                  sendVal: `${quantity}@${selectedItem.name}`,
                }
              : item
          )
        );
      } else {
        setLuggage((prev) => [
          ...prev,
          {
            name: selectedItem.name,
            quantity,
            type: selectedItem.type,
            sendVal: `${quantity}@${selectedItem.name}`,
          },
        ]);
      }
      setIsItemCountModalOpen(false);
      setSelectedItem(null);
    }
  };

  const handleRemoveLuggage = (name) => {
    setLuggage((prev) => prev.filter((item) => item.name !== name));
  };

  const handleGetQuotes = () => {
    if (!pickup || !dropoff || !date || !time || !passengers) {
      alert("ERROR!\nPlease select all fields correctly.");
      return;
    }

    setIsLoading(true);
    const [hours, minutes] = time.split(":");
    const luggageObject = luggage.reduce(
      (acc, item) => {
        if (item.type === "cabin") acc.cabin += parseInt(item.quantity);
        else if (item.type === "checkin")
          acc.checkin += parseInt(item.quantity);
        else if (item.type === "passenger")
          acc.passenger += parseInt(item.quantity);
        return acc;
      },
      { cabin: 0, checkin: 0, passenger: 0 }
    );

    const totalPassengers = parseInt(passengers) + luggageObject.passenger;
    const finalVias = viaFields.filter((v) => v).join("@");
    const officeDetails =
      "LTX,Taxi Airport Luton,https://www.taxiairportluton.co.uk/,02037403527";
    const luggageText = luggage.map((item) => item.sendVal).join(",");

    const url = `https://booking.londontaxi247.co.uk/OurVehicle/OurVehicle?luggage_text=${luggageText}&pickup=${
      pickup.value
    }&checkurl=true&dropoff=${
      dropoff.value
    }&office_details=${officeDetails}&luggageobject=${[
      luggageObject.cabin,
      luggageObject.checkin,
      totalPassengers,
      date,
      hours,
      minutes,
    ]}&listviasaddress=${finalVias}&tripFlag=${journeyType}&mints=${waitingTime}&fromDoorNumber=${fromDoorNo}&toDoorNumber=${toDoorNo}&colorCode=fc983c`;

    window.location.href = url;
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto md:h-svh py-20 w-full  justify-center content-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Book Your Taxi
      </h1>
     <div className="my-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          {/* pickup */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pick Up
            </label>
            <div className="flex">
              <AsyncPaginate
                value={pickup}
                onChange={setPickup}
                loadOptions={loadOptions}
                placeholder="Select pickup address"
                className="flex-1 active"
                minLength={3}
                classNamePrefix="Select"
              />
              <button
                onClick={() => setIsPickupAirportModalOpen(true)}
                className="ml-2 p-2 bg-yellow-500 rounded"
              >
                <FaPlane />
              </button>
            </div>
          </div>
          {/* from door */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              From Door No.
            </label>
            <input
              type="text"
              value={fromDoorNo}
              onChange={(e) => setFromDoorNo(e.target.value)}
              placeholder="Door No. For Pick Up"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {/* via input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Via</label>
          <div className="flex">
            <input
              type="text"
              value={
                viaFields.length ? `${viaFields.length} Vias` : "Via (Optional)"
              }
              disabled
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => setIsViaModalOpen(true)}
              className="ml-2 p-2 bg-yellow-500 rounded"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* destination off */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <div className="flex">
              <AsyncPaginate
                value={dropoff}
                onChange={setDropoff}
                loadOptions={loadOptions}
                placeholder="Select dropoff address"
                className="flex-1"
                minLength={3}
                classNamePrefix="Select"
              />
              <button
                onClick={() => setIsDropoffAirportModalOpen(true)}
                className="ml-2 p-2 bg-yellow-500 rounded"
              >
                <FaPlane />
              </button>
            </div>
          </div>
          {/* drop off */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              To Door No.
            </label>
            <input
              type="text"
              value={toDoorNo}
              onChange={(e) => setToDoorNo(e.target.value)}
              placeholder="Door No. For Drop Off"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* date picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* time picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* passengers */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passenger
            </label>
            <div className="flex">
              <select
                
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="flex-1 p-2 border rounded"
              >
                {Array.from({ length: 200 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} Passenger{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
              <button aria-label='btn3' className="ml-2 p-2 bg-yellow-500 rounded">
                <FaUsers />
              </button>
            </div>
          </div>
          {/*  items carring */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Items
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Add Items"
                disabled
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={() => setIsLuggageModalOpen(true)}
                className="ml-2 p-2 bg-yellow-500 rounded"
              >
                <FaLuggageCart />
              </button>
            </div>
          </div>
          {/*  journey type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trip
            </label>
            <select
              value={journeyType}
              onChange={handleJourneyTypeChange}
              className="w-full p-2 border rounded"
            >
              <option>Single Trip</option>
              <option value="WR">Wait and Return</option>
            </select>
          </div>
        </div>
      {/* selected item */}
      <div className="mt-4 flex flex-wrap gap-4">
        {luggage.map((item) => (
          <div
            key={item.name}
            className="flex items-center bg-yellow-500 p-2 rounded"
          >
            <span>
              {item.quantity} {item.name}
            </span>
            <button
              onClick={() => handleRemoveLuggage(item.name)}
              className="ml-2 text-red-500"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
      {/* submit buton */}
      <div className="mt-4 text-center">
        <button
          onClick={handleGetQuotes}
          className="bg-yellow-500 text-black px-6 py-3 rounded-3xl cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
        >
          Get Quotes
        </button>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
        </div>
      )}

      {/* Modals */}
      <ViaModal
        isOpen={isViaModalOpen}
        onClose={() => setIsViaModalOpen(false)}
        viaFields={viaFields}
        setViaFields={setViaFields}
        validAddresses={validAddresses}
        maxFields={maxFields}
      />
      <AirportModal
        isOpen={isPickupAirportModalOpen}
        onClose={() => setIsPickupAirportModalOpen(false)}
        onSelect={(value) => setPickup({ value, label: value })}
      />
      <AirportModal
        isOpen={isDropoffAirportModalOpen}
        onClose={() => setIsDropoffAirportModalOpen(false)}
        onSelect={(value) => setDropoff({ value, label: value })}
      />
      <LuggageModal
        isOpen={isLuggageModalOpen}
        onClose={() => setIsLuggageModalOpen(false)}
        onSelect={handleAddLuggage}
      />
      <WaitTimeModal
        isOpen={isWaitModalOpen}
        onClose={() => setIsWaitModalOpen(false)}
        onSave={(time) => {
          setWaitingTime(time);
          setIsWaitModalOpen(false);
        }}
      />
      <ItemCountModal
        isOpen={isItemCountModalOpen}
        onClose={() => setIsItemCountModalOpen(false)}
        onSave={handleSaveItemCount}
      />
     </div>
    </div>
  );
};

export default BookingForm;
