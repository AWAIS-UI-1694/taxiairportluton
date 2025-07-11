const Download = () => {
    return (
        <>
            {/* Download App Section */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
        <p className="text-lg mb-6">
          Book, track, and manage your rides on the go.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://apps.apple.com/us/app/taxisnetwork/id1527242637" className="bg-black text-white px-6 py-2 rounded-lg">
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=taxisnetwork.com.uk&pli=1" className="bg-black text-white px-6 py-2 rounded-lg">
            Google Play
          </a>
        </div>
      </section>
        </>
    )
}

export default Download;