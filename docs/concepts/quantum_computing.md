# Quantum Computing and Open Source

Quantum computing is one of the most exciting frontiers in science and technology. Rather than using the 0s and 1s of classical computers, quantum computers exploit the strange behavior of quantum mechanics to perform certain types of computation dramatically faster. While large-scale quantum computers are still being built, the open source ecosystem around quantum computing is already rich, and you can start experimenting today on a regular laptop or through free cloud access to real quantum hardware.

## Classical vs. Quantum Computing

Classical computers store information as **bits** — values that are either 0 or 1. Everything your computer does — running apps, rendering video, encrypting files — comes down to manipulating billions of these bits.

Quantum computers use **qubits** (quantum bits). A qubit can be 0, 1, or — crucially — a combination of both at once. This is called **superposition**. It's not that the qubit is "secretly" one or the other; it genuinely exists in both states simultaneously until it's measured, at which point it collapses to a definite value.

Think of a coin:
- A classical bit is a coin lying flat: it's heads or tails.
- A qubit is a spinning coin: it's both at once until it lands.

### Key Quantum Concepts

**Superposition** — A qubit can represent 0 and 1 simultaneously. With *n* qubits, you can represent 2ⁿ states at the same time. 300 qubits can represent more states simultaneously than there are atoms in the observable universe.

**Entanglement** — Two qubits can be linked so that measuring one instantly tells you something about the other, regardless of the distance between them. Einstein called this "spooky action at a distance." Entanglement lets quantum computers coordinate information across qubits in ways classical computers cannot.

**Interference** — Quantum algorithms are designed to make correct answers more probable (constructive interference) and wrong answers cancel out (destructive interference), like waves in water amplifying or canceling each other. This is how quantum algorithms achieve their speedup.

**Quantum Gates** — Like logic gates (AND, OR, NOT) in classical computing, quantum gates manipulate qubits. Common gates include:
- **Hadamard (H)** — puts a qubit into superposition
- **CNOT** — entangles two qubits (controlled NOT)
- **Pauli X/Y/Z** — rotations of the qubit's state

**Measurement** — Reading a qubit collapses it from superposition to a definite 0 or 1. Quantum algorithms typically run many times, and the answer is determined by the most common outcome.

### What Quantum Computers Are Good At

Quantum computers are not universally faster. They excel at specific problem types:

- **Factoring large numbers** (Shor's algorithm) — breaks RSA encryption
- **Searching unsorted data** (Grover's algorithm) — quadratic speedup
- **Simulating quantum systems** — chemistry, materials science, drug discovery
- **Optimization problems** — logistics, finance, machine learning
- **Quantum machine learning** — hybrid classical-quantum algorithms

For most everyday tasks (browsing the web, running code, processing text), classical computers are faster and more practical.

## Timeline of Quantum Computing

### 1981 — Feynman's Idea

Physicist **Richard Feynman** proposes that a computer built on quantum mechanical principles could efficiently simulate quantum systems — something classical computers cannot do. This is the conceptual birth of quantum computing.

### 1985 — Deutsch's Formal Model

**David Deutsch** (University of Oxford) formalizes the concept of a quantum Turing machine and proposes the first quantum algorithm — a simple proof that quantum computers could outperform classical ones on some tasks.

### 1994 — Shor's Algorithm

**Peter Shor** (Bell Labs) discovers a quantum algorithm that can factor large numbers exponentially faster than any known classical algorithm. This is a landmark moment — Shor's algorithm threatens RSA encryption, the foundation of internet security. It remains a major reason governments and industry invest in both quantum computing and post-quantum cryptography.

### 1996 — Grover's Algorithm

**Lov Grover** (Bell Labs) discovers a quantum algorithm for searching an unsorted list in O(√N) time instead of the classical O(N). Grover's algorithm has broad applicability and is among the most cited quantum algorithms.

### 1998 — First Demonstrations

Researchers at MIT and Oxford demonstrate the first 2-qubit quantum computers using nuclear magnetic resonance (NMR). Quantum computing moves from theory to physical experiment.

### 2001 — Shor's Algorithm Runs on Hardware

IBM and Stanford researchers demonstrate Shor's algorithm on a 7-qubit NMR quantum computer, factoring the number 15 (into 3 × 5). A proof of concept, though 15 was already known to factor easily.

### 2016 — IBM Opens Quantum to the Public

**IBM Quantum Experience** launches — the first publicly accessible quantum computer via the cloud. Anyone with an internet connection could run quantum circuits on real hardware. This democratization kicked off the modern era of quantum software development.

### 2017 — Qiskit Released

IBM releases **Qiskit** as open source, providing a Python SDK for programming quantum computers. It becomes the most widely used quantum computing framework.

### 2019 — Google Claims Quantum Supremacy

Google's **Sycamore** processor (53 qubits) completes a specific computation in 200 seconds that Google claimed would take the world's fastest supercomputer 10,000 years. IBM disputed the claim (estimating 2.5 days for a classical supercomputer with different methods), but the milestone generated enormous attention. The term "quantum supremacy" (now often called "quantum advantage") refers to a quantum computer outperforming any classical computer on any task.

### 2021 — IBM Eagle: 127 Qubits

IBM releases the **Eagle** processor with 127 qubits — the first quantum processor to exceed 100 qubits. IBM also announces its quantum roadmap, targeting 100,000+ qubits by 2033.

### 2022 — IBM Osprey: 433 Qubits

IBM's **Osprey** processor reaches 433 qubits. Practical quantum advantage on real-world problems remains elusive due to error rates, but hardware progress is rapid.

### 2023 — IBM Condor (1,121 Qubits) and Heron

IBM's **Condor** becomes the first quantum processor to surpass 1,000 qubits. IBM also releases **Heron** (133 qubits) with significantly improved error rates — lower noise matters as much as raw qubit count. Error correction becomes the central focus of the field.

### 2024 — Google Willow and Microsoft's Topological Breakthrough

Google's **Willow** chip (105 qubits) demonstrates exponential error reduction as the system scales — a key step toward fault-tolerant quantum computing. Google reports it solves a benchmark computation in under five minutes that would take 10 septillion years classically.

Microsoft announces progress on **topological qubits** — a fundamentally different physical approach that aims to be inherently more stable than current qubit types.

### 2025 and Beyond

The field is actively working on **fault-tolerant quantum computing** — systems where quantum error correction allows reliable computation even with imperfect hardware. Current devices are **NISQ** (Noisy Intermediate-Scale Quantum) devices: real and useful for research, but limited by noise. Fault-tolerant systems are still years away but are the long-term goal.

## Open Source Quantum Computing Frameworks

You don't need a quantum computer to learn quantum computing. All major frameworks include powerful simulators that run on your laptop.

### Qiskit (IBM)

The most widely used quantum computing SDK. Written in Python, supports quantum circuit design, simulation, and execution on real IBM hardware.

```sh
pip install qiskit
```

```python
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a 2-qubit circuit
qc = QuantumCircuit(2, 2)

# Put qubit 0 into superposition
qc.h(0)

# Entangle qubit 0 and qubit 1 (Bell state)
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Simulate it
simulator = AerSimulator()
job = simulator.run(qc, shots=1024)
result = job.result()
print(result.get_counts())
# {'00': ~512, '11': ~512} — always correlated!
```

**Resources:**
- [qiskit.org](https://www.qiskit.org)
- [Qiskit GitHub](https://github.com/Qiskit/qiskit)
- [IBM Quantum Learning](https://learning.quantum.ibm.com) — free courses from beginner to advanced

### Cirq (Google)

Google's open source framework, designed for **NISQ algorithms** and Google's quantum hardware. Good for research into near-term quantum algorithms.

```sh
pip install cirq
```

**Resources:**
- [Cirq documentation](https://quantumai.google/cirq)
- [Cirq GitHub](https://github.com/quantumlib/Cirq)

### PennyLane (Xanadu)

Focused on **quantum machine learning** and hybrid classical-quantum algorithms. Uses a familiar ML-style API and supports automatic differentiation — you can compute gradients through quantum circuits, just like training a neural network.

```sh
pip install pennylane
```

**Resources:**
- [pennylane.ai](https://pennylane.ai)
- [PennyLane GitHub](https://github.com/PennyLaneAI/pennylane)
- [PennyLane tutorials](https://pennylane.ai/qml/) — quantum ML demos

### QuTiP (Quantum Toolbox in Python)

Not a circuit-based framework — QuTiP simulates the **dynamics of open quantum systems**. More physics-oriented; useful for modeling real quantum hardware, quantum optics, and quantum information theory.

```sh
pip install qutip
```

**Resources:**
- [qutip.org](https://qutip.org)
- [QuTiP GitHub](https://github.com/qutip/qutip)

### Strawberry Fields (Xanadu)

Framework for **photonic quantum computing** — a different physical approach using light (photons) instead of superconducting qubits or trapped ions.

**Resources:**
- [Strawberry Fields GitHub](https://github.com/XanaduAI/strawberryfields)

### PyQuil / Forest SDK (Rigetti)

Rigetti Computing's open source quantum programming framework. Supports Rigetti's superconducting quantum hardware.

**Resources:**
- [pyQuil GitHub](https://github.com/rigetti/pyquil)

### TKET (Quantinuum)

A high-performance quantum circuit compiler and optimization toolkit. Language-agnostic — works with Qiskit, Cirq, and others to optimize circuits before running.

**Resources:**
- [TKET GitHub](https://github.com/CQCL/tket)

### CUDA-Q (NVIDIA)

NVIDIA's platform for GPU-accelerated quantum circuit simulation. Allows simulating larger circuits by using GPU parallelism.

**Resources:**
- [CUDA-Q GitHub](https://github.com/NVIDIA/cuda-quantum)
- [CUDA-Q documentation](https://developer.nvidia.com/cuda-quantum)

## Emulators and Simulators

Simulators let you run quantum circuits on classical hardware. They're essential for learning and testing before running on real (and limited) quantum hardware.

### Browser-Based (No Installation)

| Tool | Description | Link |
| --- | --- | --- |
| **Quirk** | Drag-and-drop quantum circuit simulator in the browser. Great for visual learning. Built by Google engineer Craig Gidney. | [algassert.com/quirk](https://algassert.com/quirk) |
| **IBM Quantum Composer** | IBM's visual circuit builder; run on real IBM hardware or simulate. | [quantum.ibm.com/composer](https://quantum.ibm.com/composer) |
| **Quantum Computing Playground** | 3D visualization of quantum state spaces in the browser. | [quantumplayground.net](http://www.quantumplayground.net) |
| **The Quantum Game** | Game-based introduction to quantum optics and photon manipulation. | [quantumgame.io](https://quantumgame.io) |

### Python Simulators

| Tool | Description | Max Qubits (laptop) |
| --- | --- | --- |
| **Qiskit Aer** | High-performance simulator included with Qiskit. Supports noise models that mimic real hardware. | ~30 |
| **Cirq Simulator** | Included with Cirq; supports various simulation methods. | ~30 |
| **Qulacs** | Extremely fast C++ simulator with a Python interface. | ~30 |
| **QuEST** | Designed for HPC clusters; can simulate larger systems. | 40+ |

:::tip
Each qubit doubles the memory required to simulate. At 30 qubits you need ~8 GB of RAM. Classical simulation of 50+ qubits requires supercomputers — that's exactly why real quantum hardware matters.
:::

## Accessing Real Quantum Hardware (Free)

Several providers offer free access to real quantum computers via the cloud:

### IBM Quantum

The largest free quantum cloud platform. After creating a free account, you get access to processors with up to 127 qubits through the IBM Quantum Experience and Qiskit.

- [quantum.ibm.com](https://quantum.ibm.com) — free account, queue-based access
- [IBM Quantum Learning](https://learning.quantum.ibm.com) — free courses and certifications

### Amazon Braket (Paid, with Free Tier)

AWS's quantum cloud platform provides access to hardware from IonQ, Rigetti, Oxford Quantum Circuits, and others. Comes with a free tier for simulation.

- [aws.amazon.com/braket](https://aws.amazon.com/braket)

### Azure Quantum (Credits Available)

Microsoft's platform includes access to IonQ and Quantinuum hardware, plus free credits for new accounts.

- [azure.microsoft.com/en-us/products/quantum](https://azure.microsoft.com/en-us/products/quantum)

## Open Source Quantum Projects Worth Knowing

| Project | Description |
| --- | --- |
| [**OpenFermion**](https://github.com/quantumlib/OpenFermion) | Tools for compiling and analyzing quantum algorithms for chemistry and materials science |
| [**Mitiq**](https://github.com/unitaryfund/mitiq) | Error mitigation techniques for noisy quantum devices |
| [**Metriq**](https://metriq.info) | Open platform for tracking quantum computing benchmarks |
| [**Quantum Katas**](https://github.com/microsoft/QuantumKatas) | Microsoft's free quantum programming exercises in Q# |
| [**Classiq**](https://github.com/Classiq) | High-level quantum algorithm design platform |
| [**OpenQASM**](https://github.com/openqasm/openqasm) | Open quantum assembly language spec (the "machine code" of quantum circuits) |

## Notable Quantum Algorithms to Learn

| Algorithm | What It Does | Significance |
| --- | --- | --- |
| **Deutsch-Jozsa** | Determines if a function is constant or balanced in one query | Historically first quantum speedup; great for learning |
| **Grover's Search** | Search unsorted data in O(√N) | Quadratic speedup with broad application |
| **Shor's Factoring** | Factor large integers exponentially fast | Threatens RSA cryptography |
| **VQE** (Variational Quantum Eigensolver) | Find the lowest energy state of a molecule | Quantum chemistry; drug discovery |
| **QAOA** (Quantum Approximate Optimization) | Approximate solutions to optimization problems | Near-term hardware applications |
| **Quantum Fourier Transform** | Quantum analog of the FFT | Building block of many quantum algorithms including Shor's |

## Post-Quantum Cryptography

Shor's algorithm, once run on a large fault-tolerant quantum computer, could break RSA and elliptic curve cryptography — the basis of most internet encryption today. This has prompted the development of **post-quantum cryptography**: classical encryption schemes that are resistant to quantum attacks.

In 2024, **NIST finalized the first post-quantum cryptographic standards**, including:

- **ML-KEM** (CRYSTALS-Kyber) — key encapsulation
- **ML-DSA** (CRYSTALS-Dilithium) — digital signatures
- **SLH-DSA** (SPHINCS+) — hash-based signatures

Open source implementations are already available in OpenSSL, BoringSSL, and major TLS libraries. If you work in security or systems programming, this is an area worth tracking.

- [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [Open Quantum Safe (liboqs)](https://openquantumsafe.org) — open source quantum-resistant cryptography library

## Getting Started

If you're new to quantum computing, here's a recommended path:

1. **Build intuition visually** — Play with [Quirk](https://algassert.com/quirk) to see how quantum gates manipulate qubits
2. **Take IBM's free courses** — [IBM Quantum Learning](https://learning.quantum.ibm.com) has structured courses from zero to advanced
3. **Install Qiskit and run a Bell state circuit** — the "Hello, world!" of quantum computing (see the code example above)
4. **Work through the Qiskit textbook** — [Qiskit Textbook](https://github.com/Qiskit/textbook) is comprehensive and free
5. **Try running on real hardware** — submit a circuit to an IBM quantum computer via the free cloud access

:::tip
You don't need a physics background to get started with quantum programming. Circuit-based quantum computing is learnable with just linear algebra basics (vectors and matrices). Many tutorials introduce the math you need as you go.
:::

## Important Resources

### Courses and Textbooks

- [IBM Quantum Learning](https://learning.quantum.ibm.com) — free, structured, beginner to advanced
- [Qiskit Textbook (open source)](https://github.com/Qiskit/textbook) — comprehensive free textbook with interactive code
- [Quantum Computing for Computer Scientists (video)](https://www.youtube.com/watch?v=F_Riqjdh2oM) — Microsoft Research lecture, excellent 1-hour overview
- [Quantum Country](https://quantum.country) — a "mnemonic medium" course that uses spaced repetition; by Andy Matuschak and Michael Nielsen
- [edX: Quantum Computing Fundamentals (MIT)](https://www.edx.org/professional-certificate/mitx-quantum-computing-fundamentals)
- [Nielsen & Chuang: Quantum Computation and Quantum Information](http://www.cambridge.org/9781107002173) — the definitive textbook; heavy on math but the gold standard

### Interactive Learning

- [Quirk Circuit Simulator](https://algassert.com/quirk) — browser-based visual circuit builder
- [IBM Quantum Composer](https://quantum.ibm.com/composer) — visual circuit builder with real hardware access
- [Microsoft Quantum Katas](https://github.com/microsoft/QuantumKatas) — hands-on exercises in Q#
- [PennyLane Demos](https://pennylane.ai/qml/) — quantum ML tutorials with runnable code

### Community and News

- [Unitary Fund](https://unitary.fund) — nonprofit supporting open source quantum software; runs microgrant programs students can apply to
- [Quantum Computing Stack Exchange](https://quantumcomputing.stackexchange.com) — Q&A community
- [The Qubit Guy (podcast)](https://www.classiq.io/insights/the-qubit-guy-podcast) — interviews with quantum computing researchers
- [IEEE Quantum Week](https://qce.quantum.ieee.org) — major annual quantum computing conference

### Key GitHub Organizations

- [Qiskit (IBM)](https://github.com/Qiskit)
- [quantumlib (Google)](https://github.com/quantumlib)
- [PennyLaneAI (Xanadu)](https://github.com/PennyLaneAI)
- [microsoft/Quantum](https://github.com/microsoft/Quantum)
- [unitaryfund](https://github.com/unitaryfund)
