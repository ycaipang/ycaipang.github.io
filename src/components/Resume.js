import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import pdf from '../assets/img/Yul-Caipang.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { ArrowRightCircle } from "react-bootstrap-icons";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export const MyVerticallyCenteredModal = (props) => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="resume"
    >
      <Modal.Body closeButton>
        <Button onClick={props.onHide}>X</Button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer 
          fileUrl={pdf}
          />
        </Worker>
        <button>
        <a className='download' href={pdf} target="_blank" rel="noopener noreferrer"><ArrowRightCircle size={20}/>Download</a>
        </button>
      </Modal.Body>
    </Modal>
  );
}