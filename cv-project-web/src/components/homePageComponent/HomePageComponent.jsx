import "./HomePageComponent.css";

const HomePageComponent = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col photo" width='100px'>
          <img  src="https://media-exp1.licdn.com/dms/image/C4D03AQEzJh09oYps5Q/profile-displayphoto-shrink_200_200/0/1633082026317?e=1653523200&v=beta&t=Xs8Sb7iXzR7omQrVzGL81rV70FQlu7Qr0sbTX7Vj6Vg"
          height='300' width='300'></img>
        </div>
        <div class="col aboutMe1"><b>Merhaba, ben Atakan Oğuz.Trakya Üniversitesi Bilgisayar Mühendisliği bölümü 3.Sınıf öğrencisiyim. Yazılım alanında Java SpringBoot ve ReactJs üzerine
        çalışmalar gerçekleştiriyorum. Çeşitli projeler geliştirip, çeşitli projelerde yer alıyorum.</b>
        </div>
      </div>
    </div>
  );
};
export default HomePageComponent;
