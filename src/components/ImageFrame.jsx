import React, { useState, useEffect } from "react";
import { cn } from "@site/src/utils"

const ImageFrame = ({imagePath, caption, className}) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(false);
    }, [imagePath]);

    const toggleModal = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
            setModalVisible(!modalVisible);
            if (!modalVisible) {
                document.querySelector('.navbar').style.display = 'none';
            } else {
                document.querySelector('.navbar').style.display = 'flex';
            }
        }, 300);
    }

    return (
        <>
            <div className="text-center border border-2 rounded rounded-md px-2 border-whitesmoke-500">
                <img src={imagePath} onClick={toggleModal} className={cn("w-full cursor-zoom-in", className)} />
                {
                    caption && <h4 className="mb-4 font-gray-300">{caption}</h4>
                }
            </div>

            <div className={`pacity-0 fixed z-50 overflow-y-auto top-0 w-full left-0 cursor-zoom-out transition-opacity transition-transform duration-300 ${modalVisible ? "" : "hidden"}`} id="publish-modal" onClick={toggleModal}>
                <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-[#000] opacity-65" />
                        <div className="inline-block align-center rounded-lg text-left overflow-hidden shadow-3xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <img src={imagePath} className="max-w-full max-h-full" />
                        </div>
                    </div>     
                </div>
            </div>
        </>
    )
}

export default ImageFrame;