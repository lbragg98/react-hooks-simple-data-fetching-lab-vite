import { useState, useEffect } from "react"

export default function App() {
  const [dogImage, setDogImage] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchDog = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      )
      const data = await response.json()
      setDogImage(data.message)
    } catch (error) {
      console.error("Error fetching dog image:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDog()
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Random Dog Generator</h1>

      {loading && <p>Loading...</p>}

      {!loading && dogImage && (
        <img
          src={dogImage}
          alt="Random Dog"
          style={{ maxWidth: "400px", borderRadius: "10px" }}
        />
      )}

      <div style={{ marginTop: "1rem" }}>
        <button onClick={fetchDog}>
          Get New Dog
        </button>
      </div>
    </div>
  )
}
