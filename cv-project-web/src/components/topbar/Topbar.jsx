const TopbarComponent =() => {

return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" ><b>Atakan Oğuz</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about"><b>About Me</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact"><b>Contact</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/job"><b>Job</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/school"><b>Education</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

)



}

export default TopbarComponent;