
const Index = () => {
  return (
    <div className='index'>
      <div className='cover'>
        <div className='cover-main'>
          <div className='cover-main-item'>
            <img src="/assets/img-main.jpg" className="cover-main-item-image" alt=""/>
            <div className='cover-main-item-info'>
              <span className='cover-main-item-info-local'>World</span>
              <span className='cover-main-item-info-title'>Manifestações Pró-Bolsonaro acabam em prisões</span>
              <span className='cover-main-item-info-date'>Jan 8 - 2023</span>
            </div>
          </div>
        </div>
        <div className='cover-secondary'>
          <div className='cover-secondary-item'>
            <img src="/assets/img-secondary-1.jpg" className="cover-secondary-item-image" alt=""/>
            <div className='cover-secondary-item-info'>
              <span className='cover-secondary-item-info-local'>National</span>
              <span className='cover-secondary-item-info-title'>Manifestações Pró-Bolsonaro acabam em prisões</span>
            </div>
          </div>
          <div className='cover-secondary-item'>
            <img src="/assets/img-secondary-2.jpg" className="cover-secondary-item-image" alt=""/>
            <div className='cover-secondary-item-info'>
              <span className='cover-secondary-item-info-local'>National</span>
              <span className='cover-secondary-item-info-title'>Manifestações Pró-Bolsonaro acabam em prisões</span>
            </div>
          </div>
        </div>
      </div>
      <div className='index-news'>
        <div className='latest-news'>
          <h1 className='index-news-section-title'>Últimas Notícias</h1>
          <div className='latest-news-sections'>
            <div className='latest-news-main'>
              <img src="/assets/img-main.jpg" className="latest-news-image" alt=""/>
              <span className="title">Manifestações pró-bolsonaro acabam em prisões</span>
              <span className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab debitis enim excepturi incidunt ipsa itaque iusto labore laborum molestiae nisi optio perferendis perspiciatis quia quos repudiandae, sunt veniam voluptatum.</span>
              <div className="localdate">
                <span className="date">Jan 8, 2023</span>
                <span className="local">National</span>
              </div>
            </div>
            <div className='latest-news-secondary'>
              <div className='latest-news-secondary-item'>
                <img src="/assets/img-main.jpg" className="latest-news-image" alt=""/>
                <span className="local">National</span>
                <span className="title">Manifestações pró-bolsonaro acabam em prisões</span>
                <span className="date">Jan 8, 2023</span>
              </div>
              <div className='latest-news-secondary-item'>
                <img src="/assets/img-main.jpg" className="latest-news-image" alt=""/>
                <span className="local">National</span>
                <span className="title">Manifestações pró-bolsonaro acabam em prisões</span>
                <span className="date">Jan 8, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className='most-viewed-news'>
          <h1 className='index-news-section-title'>Mais Vistas</h1>
          <div className='most-viewed-news-items'>
            <div className='most-viewed-news-item'>
              <div className='info-1'>
                <span className='number'>01</span>
                <span className='local'>National</span>
              </div>
              <div className='info-2'>
                <span className='title'>Manifestações pró-bolsonaro acabam em prisões</span>
                <span className='date'>Jan 8, 2023</span>
              </div>
            </div>
            <div className='most-viewed-news-item'>
              <div className='info-1'>
                <span className='number'>02</span>
                <span className='local'>National</span>
              </div>
              <div className='info-2'>
                <span className='title'>Manifestações pró-bolsonaro acabam em prisões</span>
                <span className='date'>Jan 8, 2023</span>
              </div>
            </div>
            <div className='most-viewed-news-item'>
              <div className='info-1'>
                <span className='number'>03</span>
                <span className='local'>National</span>
              </div>
              <div className='info-2'>
                <span className='title'>Manifestações pró-bolsonaro acabam em prisões</span>
                <span className='date'>Jan 8, 2023</span>
              </div>
            </div>
            <div className='most-viewed-news-item'>
              <div className='info-1'>
                <span className='number'>04</span>
                <span className='local'>National</span>
              </div>
              <div className='info-2'>
                <span className='title'>Manifestações pró-bolsonaro acabam em prisões</span>
                <span className='date'>Jan 8, 2023</span>
              </div>
            </div>
            <div className='most-viewed-news-item'>
              <div className='info-1'>
                <span className='number'>05</span>
                <span className='local'>National</span>
              </div>
              <div className='info-2'>
                <span className='title'>Manifestações pró-bolsonaro acabam em prisões</span>
                <span className='date'>Jan 8, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;