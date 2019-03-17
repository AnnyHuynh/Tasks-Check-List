import React from 'react';
export default () => {

      return (
      <div className="">
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src="images/cal-background7.jpeg" alt="entry-1" />
            </div>

            <div className="item">
              <img src="images/cal-background.jpeg" alt="entry-2" />
            </div>

            <div className="item">
              <img src="images/cal-background5.jpeg" alt="entry-3" />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    </div>
      );
    }
 
