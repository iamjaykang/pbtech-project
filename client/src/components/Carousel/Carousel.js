import React, { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import carouselStyles from "./Carousel.module.css";
import arrow from '../../images/carouselArrow.png';

/* Renders each item/Image to be featured in the carousel */
export const CarouselItem = ({ children, width }) => {
    return (
        <div className={carouselStyles.carouselItem} style={{ width: width }}>
            {children}
        </div>
    );
};
/* Main controller.*/
const Carousel = ({ children, setPaused, paused, step}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    /*Allows carousel to swipe from first to last, or last to first image at each end*/
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex); /* update active state */
    };
    /*automatically change to next image every 4000ms(4 seconds)*/
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });
    //Swipe functionality for mobile devices
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers} /*Applies swipe handlers to carousel */
            className={carouselStyles.carousel} /*Event handlers to check mouse hover/not hover event above */
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {step === 0 && setPaused(false)}}
            >
            <div
                
                className={carouselStyles.inner}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {/* React.Children.map API to iterate all the CarouselItem children, and adjust width property */}
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
              {/*   Indicators are our buttons to tap to change images  */}
            <div className={carouselStyles.indicators}>
            <button className={carouselStyles.previous}
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >  
                    <img src={arrow} alt=""/>
                </button>
                {/* Below code to display page labels */}
                {React.Children.map(children, (child, index) => {
                    return (
                        /* className line allows us to customize the current active index
                         to highlight which index is active  */
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                        </button>
                    );
                })}
                <button className={carouselStyles.next}
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <img src={arrow} alt=""/>
                </button>

            </div>
        </div>
    );
};

export default Carousel;