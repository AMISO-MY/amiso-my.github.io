---
layout: default
title: Alumni
permalink: /alumni/
---

<div id="main" hidden>
<h1>Alumni</h1>
<p>If you are an alumnus, please join us by filling <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIr2m-i8fgx0ytzb8AKDZwGUkWuqZeJhiOvrf-bT0FgBF6FQ/viewform?usp=pp_url&entry.637111673=Yes&entry.1721707236=Yes&entry.1517891735=Yes&entry.2058844838=No" target="_blank">this form</a>.</p>
<!-- Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
    <div class="container">
        <div class="row justify-content-center">
        {% assign sorted = site.data.alumni | sort: 'name'%}
            {% for alumni in sorted %}
                <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                    <li class="card border-0 shadow-lg my-5">
                        <img class="mx-auto w-50 rounded-circle mt-2" src="{{ alumni.img }}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ alumni.name }}</h5>
                            <div class="mb-1 d-flex justify-content-between">
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
                                            <a class="text-reset text-decoration-none" href='javascript:void(0)' onClick="alert('{{alumni.discord}}')">
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
                                {% if alumni.workplace != '' and alumni.job != ''%}
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
    let stuff=`<link id="bootstrap" crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" rel="stylesheet">
    `+document.getElementById('main').innerHTML;
    const root = document.getElementById('main').attachShadow({mode: 'open'});
    root.innerHTML=stuff;
    root.getElementById('bootstrap').onload = function() {
        document.getElementById('main').removeAttribute('hidden');
    }
</script>
