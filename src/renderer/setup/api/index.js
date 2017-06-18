import Vue from 'vue'
import axios from 'axios'
import { getBaseURL } from '@/config/api'

axios.defaults.baseURL = getBaseURL()
Vue.http = Vue.prototype.$http = axios
