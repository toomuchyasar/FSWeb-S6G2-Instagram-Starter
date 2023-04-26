import React from 'react';
import Gönderi from './Gönderi';
import GönderiBaşlığı from './GönderiBaşlığı';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;
  

  return (
    <div className='posts-container-wrapper'>
      {gonderiler.map((post) => {
        return (
          <div key={post.id}>
          <Gönderi gönderi={post} gonderiyiBegen={gonderiyiBegen}/>
        </div>
        );
      })}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gönderiler;
