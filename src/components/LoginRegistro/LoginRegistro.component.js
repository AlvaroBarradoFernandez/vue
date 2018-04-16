export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTitulo:"Login PerPill"
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clickDeBotonRegistrarse(evento){
      this.blLoginVisible=false;
      this.sTitulo="Registro";
    },
    clickDeBotonCancelar(evento){
      this.blLoginVisible=true;
      this.sTitulo="Registro";
    }
  }
}
