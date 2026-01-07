import { useState, useEffect } from 'react';
import { galleryCategories } from '../data';
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
        <section id="gallery" className="gallery">
            <div className="gallery__container container">
                {/* Section Header */}
                <div className="gallery__header">
                    <span className="gallery__tag">/Mi Trabajo/</span>
                    <h2 className="gallery__title">GALERÍA</h2>
                </div>

                {/* Gallery Categories */}
                {galleryCategories.map((category) => (
                    <div key={category.id} className="gallery__category">
                        {/* Category Header */}
                        <div className="gallery__category-header">
                            <h3 className="gallery__category-title">{category.title}</h3>
                            <p className="gallery__category-description">{category.description}</p>
                        </div>

                        {/* Category Grid */}
                        <div className="gallery__grid">
                            {category.artworks.map((artwork, index) => (
                                <div
                                    key={artwork.id}
                                    className="gallery__item"
                                    onClick={() => setSelectedImage(artwork)}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {artwork.isVideo ? (
                                        <video
                                            src={artwork.imageUrl}
                                            className="gallery__media"
                                            muted
                                            loop
                                            playsInline
                                            onMouseEnter={(e) => e.currentTarget.play()}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={artwork.imageUrl}
                                            alt={artwork.title}
                                            className="gallery__media"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="gallery__overlay">
                                        <h4 className="gallery__item-title">{artwork.title}</h4>
                                        <span className="gallery__item-category">
                                            {artwork.isVideo && '▶ '}{artwork.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery__lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="gallery__lightbox-close" aria-label="Cerrar">
                        ×
                    </button>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        {selectedImage.isVideo ? (
                            <video
                                src={selectedImage.imageUrl}
                                className="gallery__lightbox-media"
                                controls
                                autoPlay
                                loop
                            />
                        ) : (
                            <img
                                src={selectedImage.imageUrl}
                                alt={selectedImage.title}
                                className="gallery__lightbox-media"
                            />
                        )}
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
