import nodemailer from 'nodemailer';
import configmail from '../config/Mail'

export default nodemailer.createTransport({configmail})