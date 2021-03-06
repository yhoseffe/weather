import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getSuggestedPlaces } from 'src/api/weatherService'

interface City {
  name: string
}

const Home: React.FC = () => {
  const [places, setPlaces] = useState<City[]>([])

  const getPlaces = async (input?: string) => {
    const trimmedInput = input?.trim()
    if (trimmedInput && trimmedInput.length > 2) {
      const response = await getSuggestedPlaces(trimmedInput)
      setPlaces(response.data)
    } else {
      setPlaces([])
    }
  }

  useEffect(() => {
    getPlaces()
  }, [])

  return (
    <div style={{ maxWidth: 1200, margin: 'auto' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        // disableClearable
        options={places}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => <>{option.name}</>}
        filterOptions={(options) => options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search City"
            margin="normal"
            variant="outlined"
            onChange={(event) => {
              getPlaces(event.target.value)
            }}
          />
        )}
      />
    </div>
  )
}
export default Home
