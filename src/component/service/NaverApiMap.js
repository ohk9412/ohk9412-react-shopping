import React, { useEffect, useRef } from "react";


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
  const contentString = [
    '<div style="padding:1rem"> ',
    '   <h3>청춘상회</h3>',
    '   <p>부산광역시 연제구 과정로 225 <br />',
    '   <a href="https://map.naver.com/v5/entry/place/1615083087?c=14371643.6402993,4189396.1999932,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt" target="_blank">네이버로 보기</a>',
    '   </p>',
    '</div>'
  ].join('');
  const infowindow = new window.naver.maps.InfoWindow({
    content: contentString
    
  });
  window.naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});
  infowindow.open(map, marker);
});
  
  return (
    <>
    <div 
    ref={mapRef} 
    style={{width:'30rem',height:'20rem',border:'solid 1px'}}></div>
    </>
  );
};

export default NaverAPIMap;