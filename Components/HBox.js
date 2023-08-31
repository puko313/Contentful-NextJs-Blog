import styles from './HBox.module.css';
export default function HBox(props) {
  return (
    <>
      <div className={styles.box}>

        <div className={styles.content}>
          <p>
            {props.caption || 'H1'}
          </p>
        </div>
        <div className={styles.contenthover2} >
          <a href={`/category/${props.caption}`} >

            <h1>{props.innerCaption || 'H1'}</h1>
            <p>
              {props.description || ''}
            </p>
          </a>
        </div>

      </div>
    </>
  );
}
