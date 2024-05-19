/* import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImg } from '../images-api';
import toast, { Toaster } from 'react-hot-toast';

import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Image, ServerResponse } from "../Types";
import { string } from 'yup';

export default function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Image | null>(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getImg() {
      try {
        setLoading(true);
        setError(false);

        const fetchedImg = await fetchImg(searchQuery, page);
        setImages((prevImages: Image[] | null )=> {
          return [...prevImages, ...fetchedImg];
        });
        toast.success('Successfully');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImg();
  }, [searchQuery, page]);

  const handleSearch = (newQuery: string) : void => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () : void => {
    setPage(page + 1);
  };

  const handleOpenModal = (value: Image) => {
    setModalIsOpen(true);
    setModalContent(value);
  };

  const handleCloseModal = () : void => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error}/>}
      <Toaster position="bottom-center" />

      {length > 0 && (
        <ImageGallery images={images} onOpenModal={handleOpenModal} />
      )}
      <div
        style={{
          position: 'fixed',
          top: '10',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading && <Loader />}
      </div>

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      {Object.keys(modalContent).length !== 0 && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          content={modalContent}
        />
      )}
    </div>
  );
} */

import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImg } from '../images-api';
import toast, { Toaster } from 'react-hot-toast';

import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Image } from "../Types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Image | null>(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getImg() {
      try {
        setLoading(true);
        setError(null);

        const fetchedImg = await fetchImg(searchQuery, page);
        if (Array.isArray(fetchedImg)) {
          setImages((prevImages) => [...prevImages, ...fetchedImg]);
          toast.success('Successfully fetched images');
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (error) {
        setError('An error occurred while fetching images.');
        toast.error('Failed to fetch images');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getImg();
  }, [searchQuery, page]);

  const handleSearch = (newQuery: string): void => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);  // Reset images to an empty array
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (value: Image): void => {
    setModalIsOpen(true);
    setModalContent(value);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <Toaster position="bottom-center" />

      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={handleOpenModal} />
      )}
      <div
        style={{
          position: 'fixed',
          top: 10,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading && <Loader />}
      </div>

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      {modalContent && (
        <ImageModal
          onOpenModal={modalIsOpen}
          onCloseModal={handleCloseModal}
          image={modalContent}
        />
      )}
    </div>
  );
}
