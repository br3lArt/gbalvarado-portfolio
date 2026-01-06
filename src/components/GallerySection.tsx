import { useState, useEffect } from 'react';
import { artworkData } from '../data';
import type { Artwork } from '../types';
import './GallerySection.css';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="gallery" className="gallery section">
            <div className="gallery__container container">
                <h2 className="section-title">Gallery</h2>

                {/* Masonry Grid - Shows all artwork */}
                <div className="gallery__grid">
                    {artworkData.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className="gallery__item"
                            onClick={() => setSelectedImage(artwork)}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <img
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                className="gallery__image"
                                loading="lazy"
                            />
                            <div className="gallery__overlay">
                                <h3 className="gallery__title">{artwork.title}</h3>
                                <span className="gallery__category">{artwork.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery__lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="gallery__lightbox-close" aria-label="Close">
                        ×
                    </button>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.imageUrl}
                            alt={selectedImage.title}
                            className="gallery__lightbox-image"
                        />
                        <div className="gallery__lightbox-info">
                            <h3 className="gallery__lightbox-title">{selectedImage.title}</h3>
                            <span className="gallery__lightbox-category">{selectedImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
