---
layout: page
title: Research
permalink: /research/
description: 
nav: true
nav_order: 2
horizontal: false
---

- <span style="font-size: 1.3rem; font-weight: thin;">Microarchitectural</span>
<a href="https://www.youtube.com/watch?v=rglmJ6Xyj1c" 
    style="font-size: 1.3rem; color: #32a852; font-weight: bold; font-style: italic;">
    Performance
</a>    
- <span style="font-size: 1.3rem; font-weight: thin;">Microarchitectural</span>
<a href="https://www.youtube.com/watch?v=LIYZemVCgiM" 
    style="font-size: 1.3rem; color: #FF4450; font-weight: bold; font-style: italic;">
    Security
</a>
<br>
<br>

---
<p align="justify">
Even the smartest software engineers and state-of-the-art compilers sometimes
<a href="https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec9/">fall short</a>  of meeting performance demands. 
When you've exhausted every <a href="https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec1/">software trick</a> 
possible and it still doesn't cut it; when further performance gains escape the reach of code, that’s where 
<span style="font-size: 1rem; color: #1E90FF; font-weight: bold;">Microarchitects</span> step in. 
They extract raw performance from the veins of silicon itself, tap into performance reservoirs that no software has access to, 
unlock performance paths which are hidden even from compilers, and reclaim performance at every
<a href="https://www.intel.com/content/www/us/en/docs/programmable/784383/24-1/cpu-cycles-and-steps.html">CPU clock tick</a>.
This is a realm where every nanosecond is precious and every clock cycle is critical.
</p>

<p align="justify">
But modern microarchitectures aren't just blazingly fast, they're also scarily smart.
A look at any modern CPU 
<a href="https://upload.wikimedia.org/wikipedia/commons/a/a4/Intel_Core_i9-13900K_Labelled_Die_Shot.jpg">die</a> reveals a world where
<a href="https://developers.redhat.com/blog/2016/03/14/superscalar-execution">Superscalar</a> pipelines,
<a href="https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/technical-documentation/hardware-behavior-related-to-speculative-execution.html">Speculative Execution</a> units,
<a href="https://developer.arm.com/documentation/ddi0406/c/System-Level-Architecture/Common-Memory-System-Architecture-Features/Caches-and-branch-predictors/Branch-predictors">Branch Predictors</a>, Cache
<a href="https://www.intel.com/content/www/us/en/content-details/780991/hardware-llc-prefetch-feature-on-4th-gen-intel-xeon-scalable-processor-codename-sapphire-rapids.html">Prefetchers</a>,
<a href="https://safari.ethz.ch/digitaltechnik/spring2023/lib/exe/fetch.php?media=onur-ddca-2023-lecture15-out-of-order-execution-afterlecture.pdf">Out-of-Order</a> execution
and a host of clever tricks work together to squeeze out every last bit of performance from every possible clock tick. 
However, it begs the question: What's the actual cost for all that cleverness? Turns out, <i><strong>when performance bites, security bleeds!</strong></i>.
And now, you've opened the door to 
<a href="https://comsec.ethz.ch/research/microarch/retbleed/">Retbleed</a>, 
<a href="https://meltdownattack.com/">Spectre</a>, 
<a href="https://meltdownattack.com/">Meltdown</a>, 
<a href="https://foreshadowattack.eu/">Foreshadow</a>, 
<a href="https://zombieloadattack.com/">ZombieLoad</a>, 
<a href="https://mdsattacks.com/">Fallout</a>, and an entire class of 
<a href="https://www.youtube.com/watch?v=XQs6Xdik9B0">side-channel</a> and 
<a href="https://www.youtube.com/watch?v=zOvBHxMjNls">speculative execution attacks</a>. 
These aren't just theoretical academic curiosities; they’re real, they're devastating, and they exploit the very intelligence we etched into the silicon in the pursuit of speed.
</p>
<br>
<p align="">
<span style="color: #6e6e6e; font-weight: thin; font-style: italic" >For further technical information, head over to my <a href="/publications/">Publications</a> page.</span>
</p>
---
<br>
<div style="text-align: center; font-style: italic;">“If what you are working on is not important and not likely to lead to important things, then why are you working on it?”</div>
<div style="text-align: center; font-style: italic;">— Richard W. Hamming</div>
