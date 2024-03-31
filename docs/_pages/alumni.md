---
layout: default
title: Alumni
permalink: /alumni/
---

<div id="main">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<h1>Alumni</h1>
<p>If you are an alumnus, please join us by filling <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIr2m-i8fgx0ytzb8AKDZwGUkWuqZeJhiOvrf-bT0FgBF6FQ/viewform?usp=pp_url&entry.637111673=Yes&entry.1721707236=Yes&entry.1517891735=Yes&entry.2058844838=No" target="_blank">this form</a> for networking opportunities.</p>
<!-- Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
    <div class="container">
        <div class="row justify-content-center">
        {% assign sorted = site.data.alumni | sort: 'name'%}
            {% for alumni in sorted %}
                <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                    <li class="card border-0 shadow-lg my-5">
                        <img class="mx-auto w-50 rounded-circle mt-2" src="/assets/images/alumni/{{ alumni.name }}.jpg" loading="lazy" alt="A nice picture of {{ alumni.name }}">
                        <div class="card-body">
                            <h5 class="card-title">{{ alumni.name }}</h5>
                            <div class="mb-1 d-flex justify-content-between">
                                <div class="d-inline-block">
                                    {% for iso in alumni.iso %}
                                        <span class="badge bg-secondary rounded-pill">{{ iso }}</span>
                                    {% endfor %}
                                    {% if alumni.tuition == 'Yes' %}
                                        <span class="badge bg-dark rounded-pill">Offers tuition</span>
                                    {% endif %}
                                </div>
                                <div class="d-inline-block">
                                    {% if alumni.linkedin != '' and alumni.linkedin != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.linkedin}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-linkedin"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.github != '' and alumni.github != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.github}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-github"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.facebook != '' and alumni.facebook != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.facebook}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-facebook"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.discord != '' and alumni.discord != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href='javascript:void(0)' onClick="copy_text('{{alumni.discord}}')">
                                                <i class="bi bi-discord"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.instagram != '' and alumni.instagram != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.instagram}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-instagram"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.website != '' and alumni.website != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.website}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-globe"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.email != '' and alumni.email != null %}
                                        <span>
                                            <a class="text-reset text-decoration-none"  href='javascript:void(0)' onClick="copy_text('{{alumni.email}}')">
                                                <i class="bi bi-envelope-fill"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                </div>
                            </div>
                            <p class="card-text">
                                {{ alumni.workplace }}
                                {% if alumni.workplace != '' and alumni.workplace != null and alumni.job != '' and alumni.job != null %}
                                -
                                {% endif %}
                                {{ alumni.job}}
                            </p>
                        </div>
                    </li>
                </div>
            {% endfor %}
        </div>
    </div>
    <p class="fst-italic">* national team member, but cannot represent due to special circumstances.</p>
</div>
<script>
    // copy
    function copy_text(text){
        try {
            navigator.clipboard.writeText(text).then(()=>alert(text + ' copied!'));
        } catch (err) {
            alert(text);
        }
    }
    const root = document.getElementById('main').attachShadow({mode: 'open'});
    root.innerHTML=document.getElementById('main').innerHTML;

</script>
