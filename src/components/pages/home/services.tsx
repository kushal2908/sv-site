import React from 'react';

export default function Services() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-200">
            <div className="grid gap-4">
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-01.jpg" width="232" height="290" alt="Image 01" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-02.jpg" width="232" height="290" alt="Image 02" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-03.jpg" width="232" height="174" alt="Image 03" />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-04.jpg" width="232" height="155" alt="Image 04" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-05.jpg" width="232" height="349" alt="Image 05" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-06.jpg" width="232" height="250" alt="Image 06" />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-07.jpg" width="232" height="349" alt="Image 07" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-08.jpg" width="232" height="155" alt="Image 08" />
                </div>
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-09.jpg" width="232" height="250" alt="Image 09" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="w-full rounded-xl shadow" src="./masonry-10.jpg" width="232" height="290" alt="Image 10" />
                </div>
                <img className="w-full rounded-xl shadow" src="./masonry-11.jpg" width="232" height="155" alt="Image 11" />
                <img className="w-full rounded-xl shadow" src="./masonry-12.jpg" width="232" height="309" alt="Image 12" />
            </div>
        </div>
    );
}

const services = [{}];
