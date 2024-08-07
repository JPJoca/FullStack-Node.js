<template>
<footer>
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6 footer-about wow fadeInUp">
                    <img class="logo-footer" src="../assets/bmw.png" alt="logo-footer" data-at2x="assets/img/logo.png">
                    <p>
                        Mi smo novi salon koja uvek traži nove i kreativne ideje kako bismo vam pomogli sa našim proizvodima u vašem svakodnevnom radu.
                    </p>
                
                </div>
                <div class="col-md-6 col-lg-4 offset-lg-2 footer-contact wow fadeInDown">
                    <h3>Contact</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Frankfurter Ring 35, 80807 München, Nemacka</p>
                    <p><i class="fas fa-phone"></i> Phone: (0039) 333 12 68 347</p>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">hello@domain.com</a></p> 
                </div>
            </div>
        </div>
    </div>
    
</footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    title: String,
  },
};
</script>

<style>
  a{
    text-decoration: none;
  }
  footer{
    position: relative;
    margin-top: 10px;
    background-color: #6c757d ;
    height: 200px;
  }
  .logo-footer{
    position: relative;
    height: 100px;

  }
</style>