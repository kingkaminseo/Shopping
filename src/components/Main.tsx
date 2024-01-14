import Store from "../pages/Store"

function Main() {
    return (
        <section>
                        {/* <img src="../public/imgs/tv.jpg" alt="TV"  style={{ width: '120%',objectFit: 'cover' }} /> */}
            <p style={{
                textAlign: 'center',
                fontWeight: '800',
                fontSize: '80px',
                margin: '0',
                lineHeight: '1'
            }}>
                The Top and Tv
            </p>

            {/* 이미지 파일의 경로를 정확하게 지정해주세요 */}


            <Store/>

        </section>
    )
  }
  
  export default Main