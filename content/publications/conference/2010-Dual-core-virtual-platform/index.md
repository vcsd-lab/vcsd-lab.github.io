---
title: "Dual-core virtual platform with QEMU and SystemC"

authors:
  - "Cheng-Shiuan Peng"
  - "Li-Chuan Chang"
  - "Chih-Hung Kuo"
  - "Bin-Da Liu"


date: 2010-11-18
tags: ["conference"]

publication: "2010 International Symposium on Next Generation Electronics"

abstract: |
  Dual-core platforms are growing as a new industry trend as platforms with only one core cannot easily perform the diverse functions in current embedded system applications, such as smart phones. We establish an easy-to-use co-simulation dual-core virtual platform to validate the functionality of hardware and software jointly. In our platform, the hardware components are implemented by SystemC, and two ARM CPUs which are emulated by QEMU, executing the software functions. To control the data flow, BSD sockets are employed to deliver data to each component, including shared memory, hardware modules and QEMU. A thread controller is also built to handle the system thread between the different cores. We verify the dual-core virtual platform using an advanced H.264/AVC encoder SystemC model and a H.264/AVC decoder. The model is controlled by a QEMU emulated ARM CPU, and another ARM CPU executes the decoder flow.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/5669196
---
