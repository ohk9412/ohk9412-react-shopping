import React, { useEffect, useRef } from "react";
// import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';


export const NaverAPIMap = (props) => {
  const mapRef = useRef(null);
  
  useEffect(()=> {
    if (!mapRef.current || !window.naver) return;
  const location = new window.naver.maps.LatLng(35.18754,129.102681)
  const mapOptions = {
      center:location,
      zoom: 20,
      zoomControl:true,
    };
  const map = new window.naver.maps.Map(mapRef.current,mapOptions);
  const marker = new window.naver.maps.Marker({
    position: location,
    map:map
  })
});
  
  return (
    // <RenderAfterNavermapsLoaded 
    // ncpClientId={process.env.REACT_APP_NAVER_API_KEY}
    // error={<p>Maps Load Error</p>}
    // loading={<p>Maps Loading</p>}
    // >
    //   <NaverMap
    //     mapDivId={"react-naver-map"} // default name
    //     defaultCenter={{lat:37.49988, lng: 127.03856} }
    //     defaultZoom={17}
    //     zoomControl={true}
    //     naverRef={mapRef}
    //   />
    // </RenderAfterNavermapsLoaded>
    <>
    <div ref={mapRef} style={{width:'30rem',height:'20rem',border:'solid 1px'}}></div>
    </>
  );
};

export default NaverAPIMap;