import styles from './card.module.css'
import {
    useEffect
} from 'react'

const ImageCard = (props) => {
    const { url, height } = props;
    const imgRef =useRef(null);
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry],obs)=> 
            if(entry.isIntersecting){
                const img = entry.target;
                const oImg = document.createElement('img')
                oImg.src = img.dataset.src;
                oImg.onload = function () {
                    img.src = oImg.src;
                }
            }
        )
        observer.observe(imgRef.current);
    },[url])
        <div style={{height}} className={styles.card}>
            <img ref={imgRef} data-src={url} className={styles.img} />
        </div>
    )
}