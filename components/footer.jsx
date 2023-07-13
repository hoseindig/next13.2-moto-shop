const Footer = () => {
  return (
    <>
      <div className="footerBox">
        <p>
          Ride on two wheels long enough and you’ll soon learn that everything
          wears out. Motorcycle parts, available by the tens of thousands here
          at RevZilla, are your ticket to greatness. Whether you need an OEM
          part for repairs to your vintage ride or aftermarket parts for the
          latest and greatest Suzuki or BMW, it’s all here. Really — we mean
          that. There’s so much to pick from you’re sure to score the motorcycle
          parts you didn’t know you needed. Isn’t that always the case? Either
          way, we’re going to help you squeeze every ounce of grin-inducing and
          neck-snapping enjoyment out of your two-wheeled thrill machine! You’re
          going to need some tools to take it all down and put it back together
          again so look no further than this be-all-end-all guide to{" "}
          <a
            href="https://www.revzilla.com/common-tread/assembling-a-motorcycle-maintenance-tool-kit-for-less-than-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            building up a kit for maintenance
          </a>
          .<br />
          <br />
          <strong>From Air Filters to Turn Signals</strong>
          From A to Z, we promise you’ll find it at RevZilla. Score exotic
          exhaust systems, the latest in crash protection or the nuts and bolts
          to keep it secure. We have a curated selection of premium add-ons to
          take your ride to the next level. Whether you're strictly street or a
          track day junkie, RevZilla is here to keep kids off stock bikes. For
          those who get dirty in the woods or on the motocross track, our
          selection of OEM and aftermarket motorcycle parts and accessories
          comes to the rescue again. Bent levers? Busted fenders? It’s no
          problem when you’ve got so much to pick from to bring things back to
          new.
          <br />
          <br />
          <strong>Browse By Bike</strong>
          <br />
          <br />A world of motorcycle parts are at your fingertips and we’ve
          worked hard to make just about everything you could possibly need
          easily available. Be sure to check out the plethora of links above to
          find exactly what’s best for your bike, be it an ADV steed, sports
          machine or V-Twin cruiser. When in doubt, reach out to our
          <a
            href="https://www.revzilla.com/customer-service"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gear Geeks
          </a>{" "}
          for some guidance.
        </p>
      </div>
      <div className="footer__email-signup">
        <div className="footer-box-left">
          <label class="footer__email-label footer__heading" for="email-input">
            Subscribe to
            <br />
            The Inside Line
          </label>
          <br />

          <span class="footer__signup-description">
            Deals, New Releases &amp; Video Reviews
          </span>
        </div>
        <div className="footer-box-right">
          <input type="text" />
          <button
            class="ui-button ui-button--large ui-button--black"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
      <img src="images/footer-down.jpg" alt="" />
    </>
  );
};

export default Footer;
