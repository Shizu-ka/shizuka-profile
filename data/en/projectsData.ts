import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'school',
    title: 'CariEO, Find your Event Organizer',
    description: `CariEO is an online platform designed to make it easier for users to search for and find event organizers (EO) that suit their needs.`,
    imgSrc: '/static/images/cariEO.png',
    repo: 'wahyuvlntn/CariEO',
    url: 'https://github.com/wahyuvlntn/CariEO',
    builtWith: ['PHP', 'Laravel', 'Boostrap', 'Blade'],
  },
  {
    type: 'self',
    title: 'Recipe Website Template',
    description:
      'A simple recipe website template, made using simple html, js and css. The website template features a clean and intuitive design, making it easy for users to navigate and find their desired recipes.',
    imgSrc: '/static/images/hiCal.png',
    repo: 'Shizu-ka/Website-Calorie',
    url: 'https://github.com/Shizu-ka/Website-Calorie',
    builtWith: ['Html', 'CSS', 'Js', 'Boostrap'],
  },
  {
    type: 'school',
    title: 'Pizza Hut, Java program made with Swing, Sql, Jasper',
    description: `The Java program developed using Swing, SQL, and Jasper provides an efficient and user-friendly solution for managing data, generating reports, and enhancing the overall experience of restaurant operations at Pizza Hut.`,
    imgSrc: '/static/images/detailedDatabase.png',
    repo: 'Shizu-ka/Detailed-Dababase-With-Java',
    builtWith: ['Java', 'MariaDB', 'Jasper', 'Java Swing'],
  },
  {
    type: 'school',
    title: 'Program-Sederhana-Pemesanan-Java',
    description: `Proyek sederhana dalam materi pemrograman beroriantasi object (OOP). Program pemesanan dengan java swing yang sudah terhubung ke database. Riwayat dari pemesanan akan muncul di bawah dalam bentuk tabel.`,
    imgSrc: '/static/images/goNgeng.png',
    repo: 'Shizu-ka/Program-Sederhana-Pemesanan-Java',
    url: 'https://github.com/Shizu-ka/Program-Sederhana-Pemesanan-Java',
    builtWith: ['Java', 'Swing', 'NitriteDB'],
  },
  {
    type: 'school',
    title: 'Quiz App',
    description: `The Quiz App, developed using Kotlin for Java programming, provides an interactive platform for users to test their knowledge and skills in the Java programming language.`,
    imgSrc: '/static/images/quizApp.jpg',
    repo: 'Shizu-ka/Quiz-App',
    builtWith: ['Kotlin', 'Compose','MVC'],
  },
  {
    type: 'self',
    title: 'School Profile Website',
    description: 'This website i made as my project when i did MMD(Mahasiswa Membangun Desa/KKN) 2023. SDN 2 Ampeldento\'s school profile website is a dynamic online hub that highlights the school\'s curriculum.',
    imgSrc: '/static/images/sdn2.png',
    repo: 'Shizu-ka/School-Profile-Website',
    url: 'http://sdn2ampeldento.my.id/',
    builtWith: ['JS', 'HTML', 'Boostrap', 'CSS', 'AJAX'],
  },
]
