// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './App.css';
import clsx from "clsx";
import Header from "./common-components/header";
import MenuCarousel from "./common-components/menu-carousel";
import PropertyCard from "./common-components/property-card";
import { LoadingPosts } from "./common-components/loading-lazy-content";
import Footer from "./common-components/footer";
import { wrapper } from "./core/wrapper/wrapper";
import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLazyLoad from "./core/hooks/useLazyLoad";

const App = () => {
  const triggerRef = useRef(null);
  const [listingProperty, setlistingProperty] = useState([]);

  useEffect(() => {
    GetPropertyImages()
    window.addEventListener('scroll', onScrollLoadMoreContent);

    return () => {
      window.removeEventListener('scroll', onScrollLoadMoreContent);
    }

  }, [])

  const onScrollLoadMoreContent = (event) => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      console.log("Get Me Down")
      GetPropertyImages()
    }
  };
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      wrapper.get(`https://pixabay.com/api/?key=30605728-dccf2355fa85fefa2c2d3abd4&q=real+estate&image_type=photo`).then(response => {
        console.log("listingRecord", response?.hits)
        var index = 0, listingRecord = [];
        while (index < response?.hits?.length) {
          listingRecord.push({ id: uuidv4(), title: 'India, Sirinagar', images: response?.hits.slice(index, index + 3), address: 'Ayubia National Park', date_created: '16–23 Oct', price: (Math.floor(Math.random() * 1000) + 500) })
          index += 3
        }
        console.log("listingRecord", listingRecord)
        setlistingProperty([...listingProperty, ...listingRecord])
        resolve([...listingProperty, ...listingRecord])
      })
    });
  };
  const GetUpdateValueOnMenuChanged = (value) => {
    setlistingProperty([])
    GetPropertyImages();
  }
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  const GetPropertyImages = () => {
    wrapper.get(`https://pixabay.com/api/?key=30605728-dccf2355fa85fefa2c2d3abd4&q=real+estate&image_type=photo`).then(response => {
      console.log("listingRecord", response?.hits)
      var index = 0, listingRecord = [];
      while (index < response?.hits?.length) {
        listingRecord.push({ id: uuidv4(), rating: Math.floor(Math.random() * (6 - 1 + 1) + 1), title: 'India, Sirinagar', images: response?.hits.slice(index, index + 3), address: 'Ayubia National Park', date_created: '16–23 Oct', price: (Math.floor(Math.random() * 1000) + 500) })
        index += 3
      }
      console.log("listingRecord", listingRecord)
      setlistingProperty([...listingProperty, ...listingRecord])
    })
  }
  return (
    <>
      <div className='mb-5 border-b-2'>
        <Header />
      </div>
      <div className="sticky top-0 z-40 bg-white">
        <div className="container">
          <MenuCarousel GetUpdatedValue={event => GetUpdateValueOnMenuChanged(event)} />
        </div>
      </div>
      <div className="container">
        <div className="grid gap-4 grid-cols-4">
          {listingProperty?.map((listing, index) => {
            return (
              <PropertyCard key={index} property={listing} />
            )
          })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
          <LoadingPosts />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
