import styles from "./waterfall.module.css";
import {
  useEffect,
  useRef,
} from 'react';
import ImageCard from '@/components/ImageCard'

const Waterfall = (props) => {
  const loader = useRef(null);

  useEffect(() => {
    // 如何判断滚动到底部
    // ref 出现在视窗了  intersetctionObserver
    // 观察者模式
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      if(entry.isIntersecting){
        fetchMore();
      }
      // observer.unobserve(entry.target);
    });
    if(loader.current){
      observer.observe(loader.current);
      return () => {
        observer.disconnect();
      }
    }
  },[])
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          {
            images.filter((_, i) => i % 2 === 0).map((img) => (
              <ImageCard key={img.id} img={img} />
            ))
          }
        </div>
        <div className={styles.column}>
          {images
            .filter((_, i) => i % 2 !== 0)
            .map((img) => (
              <div key={img.id} className={styles.item}>
                <img src={img.url} alt={img.alt} />
              </div>
            ))}
              </div>
              <div ref={loader} className={styles.loader}>加载中...</div>
      </div>
    </>
  );
};

export default Waterfall;

