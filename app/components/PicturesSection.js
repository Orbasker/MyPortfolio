'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PicturesSection = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data.images); // Assuming your API response contains an 'images' array
            } catch (err) {
                console.error('Error fetching images:', err);
                setError(err.message);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Pictures Section</h2>
            {error ? (
                <div className="text-red-500">Error: {error}</div>
            ) : (
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000} // Adjust the interval as needed
                    stopOnHover={true}
                    dynamicHeight={true}
                >
                    {images.map(image => (
                        <div key={image.key} className="carousel-image">
                            <Image
                                src={`data:${image.contentType};base64,${image.content}`}
                                alt={image.key}
                                width={500}
                                height={500}
                            />
                            {/* <img
                                src={`data:${image.contentType};base64,${image.content}`}
                                alt={image.key}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Adjust styles as needed
                            /> */}
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default PicturesSection;
