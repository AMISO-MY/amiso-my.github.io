---
layout: page
title: Alumni
permalink: /alumni/
---

Sign up as an alumnus [here](https://docs.google.com/forms/d/e/1FAIpQLSeIr2m-i8fgx0ytzb8AKDZwGUkWuqZeJhiOvrf-bT0FgBF6FQ/viewform?usp=pp_url&entry.637111673=Yes&entry.1721707236=Yes&entry.1517891735=Yes&entry.2058844838=No){:target="_blank"}.

<div id="main" hidden>
<!-- Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
    <div class="container">
        <div class="row justify-content-center">
            {% for alumni in site.data.alumni %}
                <div class="col-12 col-md-6 col-lg-4">
                    <li class="card border-0 shadow-lg my-5">
                        <img class="mx-auto w-50 rounded-circle mt-2" src="{{ alumni.img }}" alt="">
                        <div class="card-body">
                            <h3 class="card-title">{{ alumni.name }}</h3>
                            <div class="card-text d-flex justify-content-between">
                                <div class="d-inline-block">
                                    {% for iso in alumni.iso %}
                                        <span class="badge bg-secondary rounded-pill">{{ iso }}</span>
                                    {% endfor %}
                                </div>
                                <div class="d-inline-block">
                                    {% if alumni.linkedin != '' %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.linkedin}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-linkedin"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.github != '' %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.github}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-github"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.facebook != '' %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.facebook}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-facebook"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.discord != '' %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.github}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-discord"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.instagram  != ''%}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.instagram}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-instagram"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                    {% if alumni.website != '' %}
                                        <span>
                                            <a class="text-reset text-decoration-none" href="{{alumni.website}}" rel="noreferrer" target="_blank">
                                                <i class="bi bi-globe"></i>
                                            </a>
                                        </span>
                                    {% endif %}
                                </div>
                            </div>
                            <p class="card-text">
                                {{ alumni.workplace }}
                                -
                                {{ alumni.job}}
                            </p>
                        </div>
                    </li>
                </div>
            {% endfor %}
        </div>
    </div>
</div>

<script>
    let stuff=`<link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" rel="stylesheet">
    `+document.getElementById('main').innerHTML;

document.getElementById('main').attachShadow({mode: 'open'}).innerHTML=stuff;
document.getElementById('main').removeAttribute('hidden');
</script>
