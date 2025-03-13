// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      /* Step Header */
      "step_1": "Verify Identity",
      "step_2": "Choose Clinic",
      "step_3": "Confirm Information",
      "step_4": "Receive Queue",

      /* Step 1-page 1*/
      "insert_card": "Please Insert Your ID Card",
      "or_text": "or",
      "queue_button": "Press to exit the queue",
      "version": "Version 1.3.3",

      /* Step 1-page 2*/
      "thai": "Thai",
      "foreigner": "Foreigner",

      /* Step 1-page 3 (Thai)*/
      "enter_id_prompt":"Please Enter Your ID Number",
      "id_input_placeholder": "Enter Your ID Number",
      "confirm_button": "Confirm",
      "delete_button": "Delete",

      /* Step 1-page 3 (Foreigner)*/
      "enter_passport_prompt": "Enter Your ID Number / Passport No.",
      "passport_id_input_placeholder":"Enter Your ID Number",

      /* Step 1-page 4*/
      "id_card_information": "ID Card Information",
      "id_number": "ID Number",
      "passport_id": "ID Number",
      "name": "Name",
      "last_name": "Last Name",
      "dob": "Date of Birth",
      "hn": "HN",
      "phone_number": "Phone Number",
      "phone_placeholder": "Enter Phone Number",
      "phone_error_message": "Phone number must be 10 digits.",
      "phone_valid_message": "Phone number is valid and form is confirmed!",
      "delete": "Delete",
      "confirm": "Confirm",

      /* Step 2-page 1*/
      "select_queue_type": "Select Queue Type",
      "general_queue": "General Queue",
      "general_queue_desc": "Standard queue for general patients.",
      "priority_queue": "Priority Queue",
      "priority_queue_desc": "Priority queue for urgent cases.",
      "specialist_queue": "Specialist Queue",
      "specialist_queue_desc": "Queue for specialist consultations.",

      /* Step 2-page 2*/
      "select_clinic": "Please Select Clinic",
      "general_patients": "General Patients",
      "psoriasis": "Psoriasis",
      "medication_refill": "Medication Refill",
      "geriatric_clinic": "Geriatric Clinic",
      "surgery_special_medical_clinic": "Surgery and Special Medical Clinic",
      "laser_surgery": "Laser Surgery",
      "radiation_therapy": "Radiation Therapy",
      "ari_clinic": "ARI Clinic",
      "pemphigus": "Pemphigus",
      "cosmeceutical": "Cosmeceutical",
      "corona_vaccine": "Corona Vaccine",

      /* Step 3*/
      "transfer1": "You Have",
      "transfer2": "Patient Transfer",
      "selfpay": "Paying By Yourself",

      /* Step 4*/
      "greeting": "Hello,",
      "no_data_to_confirm": "No data to confirm.",
      "your_id": "ID Number",
      "your_hn": "HN Number",
      "your_phone": "Phone Number",
      "your_queue_type": "Queue Type",
      "your_clinic_selected": "Selected Clinic",
      "your_payment_method": "Payment Method",

      "nohn":"ไม่มีหมายเลข HN",
      "havehn":"มีหมายเลข HN"
    },
  },
  th: {
    translation: {
      /* Step Header */
      "step_1": "ยืนยันตัวตน",
      "step_2": "เลือกคลินิก",
      "step_3": "ยืนยันสิทธิ",
      "step_4": "รับบัตรคิว",

      /* Step 1-page 1*/
      "insert_card": "กรุณาเสียบบัตรประชาชน",
      "or_text": "หรือ",
      "queue_button": "กดเพื่อออกบัตรคิว",
      "version": "Version 1.3.3",

      /* Step 1-page 2*/
      "thai": "คนไทย",
      "foreigner": "ชาวต่างชาติ",

      /* Step 1-page 3 (Thai)*/
      "enter_id_prompt":"กรุณาใส่เลขบัตรประชาชน",
      "id_input_placeholder": "ใส่เลขบัตรประชาชน",
      "confirm_button": "ยืนยัน",
      "delete_button": "ลบ",

      /* Step 1-page 3 (Foreigner)*/
      "enter_passport_prompt": "ใส่เลขประจำตัว/หมายเลขหนังสือเดินทาง",
      "passport_id_input_placeholder":"ใส่เลขประจำตัว/หมายเลขหนังสือเดินทาง",

      /* Step 1-page 4*/
      "id_card_information": "ข้อมูลผู้เข้ารับบริการ",
      "id_number": "เลขบัตรประชาชน",
      "passport_id": "เลขประจำตัว",
      "name": "ชื่อ",
      "last_name": "นามสกุล",
      "dob": "วันเกิด",
      "hn": "HN",
      "phone_number": "กรุณากรอกหมายเลขโทรศัพท์",
      "phone_placeholder": "หมายเลขโทรศัพท์",
      "phone_error_message": "หมายเลขโทรศัพท์ต้องมี 10 หลัก",
      "phone_valid_message": "หมายเลขโทรศัพท์ถูกต้องและยืนยันแบบฟอร์มแล้ว!",
      "delete": "ลบ",
      "confirm": "ยืนยัน",

      /* Step 2-page 1*/
      "select_queue_type": "กรุณาเลือกประเภทคิว",
      "general_queue": "คิวทั่วไป",
      "general_queue_desc": "สำหรับผู้ป่วยทั่วไป ผู้ป่วย Walk-in",
      "priority_queue": "คิวด่วน",
      "priority_queue_desc": "ผู้สูงอายุ เด็ก พระสงฆ์ ผู้ป่วยฉุกเฉิน",
      "specialist_queue": "คิวนัดออนไลน์/แพทย์นัด",
      "specialist_queue_desc": "สำหรับผู้ป่วยนัดออนไลน์ แพทย์นัด",

      /* Step 2-page 2*/
      "select_clinic": "กรุณาเลือกคลินิก",
      "general_patients": "ผู้ป่วยนอกทั่วไป",
      "psoriasis": "สะเก็ดเงิน",
      "medication_refill": "รับยาเดิม",
      "geriatric_clinic": "คลินิกสูงวัย",
      "surgery_special_medical_clinic": "คลินิกศัลยกรรมและตรวจรักษาพิเศษ",
      "laser_surgery": "คลินิกศัลยกรรม Laser",
      "radiation_therapy": "คลินิกรังสีรักษา ฉายแสง",
      "ari_clinic": "คลินิก ARI",
      "pemphigus": "คลินิกตุ่มน้ำ",
      "cosmeceutical": "เวชสำอาง",
      "corona_vaccine": "วัคซีน Corona",

      /* Step 3*/
      "transfer1": "มีหนังสือส่งตัว/",
      "transfer2": "สิทธิยังไม่หมดอายุ",
      "selfpay": "ชำระเงินเอง",

      /* Step 4*/
      "greeting": "สวัสดีคุณ",
      "no_data_to_confirm": "ไม่มีข้อมูลที่ต้องยืนยัน.",
      "your_id": "เลขประจำตัวประชาชน",
      "your_hn": "หมายเลข HN",
      "your_phone": "เบอร์โทรศัพท์",
      "your_queue_type": "ประเภทคิว",
      "your_clinic_selected": "คลินิกที่เลือก",
      "your_payment_method": "สิทธิ",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
