import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

type Plan = {
  titulo: string;
  subtitulo?: string;
  precio: string;
  bullets: string[];
  badge?: string;
  months: number;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  phone = '593994096751';
  apkUrl = '/assets/app/flujotv.apk';

  planes: Plan[] = [
    {
      titulo: '1 AÑO',
      subtitulo: '(+2 MESES DE REGALO)',
      precio: '86.99 USD',
      bullets: [
        '+95 canales deportivos',
        'Para 3 pantallas',
        'Contenido para niños',
        'Contenido para adultos',
        'VOD actualizado',
        'Soporte 24/7',
      ],
      months: 12,
    },
    {
      titulo: '1 MES',
      subtitulo: '(30 DÍAS)',
      precio: '8.99 USD',
      bullets: [
        '+95 canales deportivos',
        'Para 3 pantallas',
        'Contenido para niños',
        'Contenido para adultos',
        'VOD actualizado',
        'Soporte 24/7',
      ],
      months: 1,
    },
    {
      titulo: '6 MESES',
      subtitulo: '(+1 MES DE REGALO)',
      precio: '48.99 USD',
      bullets: [
        '+95 canales deportivos',
        'Para 3 pantallas',
        'Contenido para niños',
        'Contenido para adultos',
        'VOD actualizado',
        'Soporte 24/7',
      ],
      months: 6,
    },
    {
      titulo: '3 MESES',
      subtitulo: '(90 DÍAS)',
      precio: '26.99 USD',
      bullets: [
        '+95 canales deportivos',
        'Para 3 pantallas',
        'Contenido para niños',
        'Contenido para adultos',
        'VOD actualizado',
        'Soporte 24/7',
      ],
      months: 3,
    },
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Flujo TV Apk — TV en vivo, deportes y series');
    this.meta.updateTag({
      name: 'description',
      content:
        'Descarga Flujo TV Apk y compra tu acceso por WhatsApp: TV en vivo, deportes, películas y series. Soporte 24/7.',
    });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    // JSON-LD
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Flujo TV',
      url: 'https://www.tudominio.com/',
      logo: 'https://www.tudominio.com/assets/logo.svg',
    };
    const s = this.document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(ld);
    this.document.head.appendChild(s);

    // 🎞 Carrusel automático
    let index = 0;
    const slides = this.document.querySelectorAll<HTMLElement>('.slide');
    if (slides.length > 0) {
      setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
      }, 5000);
    }
  }

  // 🔗 WhatsApp Links
  waLinkGeneral(): string {
    const msg = encodeURIComponent(
      'Hola, quiero comprar Flujo TV. ¿Me ayudas por favor?'
    );
    return `https://wa.me/${this.phone}?text=${msg}`;
  }

  waLinkPlan(p: Plan): string {
    const msg = encodeURIComponent(
      `Hola, quiero comprar Flujo TV. Plan: ${p.titulo} (${p.precio}). ¿Disponibilidad?`
    );
    return `https://wa.me/${this.phone}?text=${msg}`;
  }

    waLinkdowloandtv(): string {
    const msg = encodeURIComponent(
      'Hola, quiero comprar Flujo TV. ¿Me ayudas por favor?'
    );
    return `http://aftv.news/5506416`;
  }
 waLinkdowloandmovil(): string {
    const msg = encodeURIComponent(
      'Hola, quiero comprar Flujo TV. ¿Me ayudas por favor?'
    );
    return `http://aftv.news/6247299`;
  }
  // 📩 Manejo del formulario "Trabaja con Nosotros"
  onSubmit(form: NgForm) {
    if (form.valid) {
      const data = form.value;
      console.log('📨 Datos enviados:', data);

      // 🚀 OPCIÓN 1: enviar por EmailJS (sin backend)
      // emailjs.send("service_id","template_id", data,"public_key");

      // 🚀 OPCIÓN 2: enviar a tu backend en Node.js
      // this.http.post('http://localhost:3000/send-email', data).subscribe(...)

      alert(
        `✅ Gracias ${data.name}, tu solicitud fue enviada.\nTe responderemos a: ${data.email}`
      );
      form.reset();
    } else {
      alert('⚠️ Completa todos los campos antes de enviar.');
    }
  }
}
