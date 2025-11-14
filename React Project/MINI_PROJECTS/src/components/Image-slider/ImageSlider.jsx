import "./style.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url != "") fetchImages(url);
    }, [url]);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '25%' }}>Loading...</div>;
    }

    if (errorMsg !== null) {
        return <div>Error Occoured !! {errorMsg}</div>;
    }


    return <div className="image-slider-container">
        <div className="img-box">

            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ?
                    images.map((image, index) => (
                        <img
                            key={image.id}
                            alt={image.id}
                            src={image.download_url}
                            className={currentSlide === index ? "current-image" : "hide-current-image"}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button onClick={() => setCurrentSlide(index)} key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}></button>
                        ))
                        : null
                }
            </span>
        </div>
        <h1 className="image-slider-heading">Image Slider</h1>
    </div>
}
