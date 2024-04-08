import React from 'react';

const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Phone: +358 040 777 77 77</p>
        <p>
          Email:{' '}
          <a href=" mailto:Pygmy.Marmoset@gmail.com">
            Pygmy.Marmoset@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
