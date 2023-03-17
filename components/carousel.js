export default function Carousel() {
    return (
        <div className="carousel mt-10 md:mt-12 xl:mt-0">
            <div className="carousel-wrapper">
                <img className="carousel-cell" src="./header-images/himg-01.jpg" alt="img-01" />
                <img className="carousel-cell" src="./header-images/himg-02.jpg" alt="img-02" />
                <img className="carousel-cell" src="./header-images/himg-03.jpg" alt="img-03" />
                <img className="carousel-cell" src="./header-images/himg-04.jpg" alt="img-04" />
            </div>
        </div>
    );
}