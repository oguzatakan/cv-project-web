import "./ContactComponent.css";
const ContactComponent = () => {
  return (
    <div>
      <div class="row">
        {" "}
        <div class="contactMe">
        
          <div class = "row settıng">
            <img width={"40"} height={"40"} src = "https://w7.pngwing.com/pngs/99/335/png-transparent-black-home-icon-font-awesome-computer-icons-house-font-address-angle-logo-black.png"></img>
            <p>
            Adres : Barbaros Mahallesi / Kemal Sokak / Numara:15/A
            İstanbul/Merter
          </p>
          </div>
          <div class = "row settıng">
            <img width={"40"} height={"40"} src = "https://w7.pngwing.com/pngs/1016/200/png-transparent-telephone-computer-icons-business-handset-email-phone-service-hand-people.png"></img>
          <p>Telefon : 0533 333 33 33</p>
          </div>
          <div class = "row settıng">
            <img width={"40"} height={"40"} src = "https://cdn-icons-png.flaticon.com/512/281/281769.png"></img>
          <p>Mail : engineer17@gmail.com</p>
          </div>
          <div class="row settıng">
            <img width={"40"} height={"40"} src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
          <a href="https://github.com/oguzatakan">Github</a>
          </div>
          <div class= "row settıng">
            <img width={"40"} height={"40"} src = "https://e7.pngegg.com/pngimages/778/732/png-clipart-logo-linkedin-computer-icons-facebook-facebook-blue-text.png"></img>
            <a href="https://www.linkedin.com/in/atakan-oğuz-a13bb31bb/">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
