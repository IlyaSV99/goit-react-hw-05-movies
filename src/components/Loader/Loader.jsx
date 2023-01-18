import { RotatingLines } from 'react-loader-spinner';
import styles from './loader.module.css';

function Loader() {
  return (
    <div className={styles.box}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
