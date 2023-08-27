import React, { useEffect } from 'react'
import Icon from '../Icon'
import { Marker, Popup, useMap } from 'react-leaflet'

const MarkerPosition = ({address}) => {

    const position = [address?.location.lat, address?.location.lng] 
    const map = useMap()

    useEffect(()=>{
        map.flyTo(position, 13, {
            animate: true,
        })
    }, [map, position])

  return (
    <>
    <Marker icon={Icon} position={position}>
        <Popup>

        </Popup>
    </Marker>
    </>
  )
}

export default MarkerPosition