# What does OxDNA do?

In a nutshell, oxDNA is a simulation code that models the behavior of nucleic acids (DNA and RNA) at a coarse-grained level. The original coarse-grained DNA model was introduced by T. E. Ouldridge, J. P. K. Doye, and A. A. Louis, and it has since evolved into an extensible simulation and analysis framework. It supports several force fields, including oxDNA1, oxDNA2, oxRNA, and oxNA.

oxDNA can perform both molecular dynamics (MD) and Monte Carlo (MC) simulations. MD simulations can be run on single CPUs or accelerated using CUDA-enabled GPUs, while MC simulations exploit algorithms like Virtual Move Monte Carlo to greatly speed up equilibration and sampling. By simulating many nucleotides over time, it is possible to accurately determine the average thermodynamic and mechanical behavior of nucleic acid structures, from simple duplexes to massive DNA origami assemblies.

Using a coarse-grained model to determine the behavior of DNA is quite different from other means of solving the same problem, such as all-atom molecular dynamics. Each method has its pros and cons. Let us first take a look at a few of the salient pros and cons of all-atom models:

Pro: Solution is atomistically detailed, capturing specific water/ion interactions and highly localized chemistry.

Pro: Force fields are highly generalized for proteins, lipids, and diverse molecules.

Con: Computationally extremely expensive, limiting simulations to small systems and very short timescales (usually microseconds at best).

Con: Cannot easily simulate the assembly or large-scale mechanical deformation of large nanostructures like DNA origami.

Now let's look at the pros and cons of coarse-grained methods like oxDNA:

Pro: Computationally highly efficient, allowing the simulation of millions of nucleotides over much longer timescales.

Pro: Perfectly captures the thermodynamics of hybridization, mechanical properties (like persistence length), and large-scale structural transitions.

Pro: Can easily incorporate external forces to simulate optical tweezers, atomic force microscopy, or spatial confinement.

Con: Atomistic resolution is lost; you cannot track individual atoms, backbone dihedral angles, or explicit water molecules.

Con: Relies on parameterized force fields that are specifically tuned for DNA and RNA, meaning it cannot natively simulate arbitrary proteins or complex small-molecule drugs without extensive modification.

# How does it work?

In order to do anything, the code first needs to have a model of some problem of interest. This could be a simple DNA duplex, a Holliday junction, or a complex DNA origami nanorobot. You, as the code user, will need to describe the model so that the code can do something with it. A basic model consists of a few things:

A Configuration File: A description of the physical geometry, containing the 3D positions, velocities, and angular orientations of every nucleotide in the system.

A Topology File: A description of the chemical sequence and connectivity, detailing what nucleotides are present, their bases (A, T, G, C, U), and which nucleotides are covalently bonded to each other.

An Input File: Various parameters telling the code how to simulate the system, such as the temperature, salt concentration, the number of steps to run, and whether to use MD or MC methods.

Observables: A list of different physical quantities that the code should return at the end of the simulation. If you don't ask for anything, it will only give you the default trajectory; you must explicitly request outputs like hydrogen-bonding energy, distance between particles, or coaxial-stacking quantities. For most of these parameters, you can run analysis post-simulation as well.

# Tools within OxEcosystem?

The oxDNA project has grown far beyond a single simulation engine. It is now a rich ecosystem of interconnected tools designed to help you design, simulate, and analyze nucleic acid nanotechnology:

oxDNA / oxRNA Engine: The core C++/CUDA simulation engine responsible for running the heavy computational physics.

Oxpy: A Python module that binds directly to the oxDNA engine, making it possible to control the behavior of the simulation using Python scripts. This allows for advanced techniques like replica-exchange and well-tempered metadynamics.

oxDNA Analysis Tools (oat): A powerful Python library aimed at facilitating the analysis of oxDNA/oxRNA trajectories. It provides tools for alignment, calculating distances between nucleotides, measuring interduplex angles, and comparing hydrogen bonding patterns.

OxView: A browser-based visualization and editing tool that allows you to load, manipulate, and visually inspect 3D configuration and topology files.

Conversion Utilities: Scripts and tools (such as scadnano integration and tacoxDNA) that allow you to convert designs from CAD software directly into oxDNA-ready configuration and topology files.

# What do I need to know?

To begin, you just need to go to OxView to visualize and edit your structure, and OxCloud to simulate it right in your browser.

However, to have fine-grained control over all the tools the oxDNA ecosystem has to offer, you will need to be a little proficient with the command-line interface (CLI) and git for staying up-to-date with the latest code developments.

For advanced users, the oxpy (Python bindings) and oat (oxDNA Analysis Tools) APIs offer direct usability improvements over dealing with raw text inputs and outputs, such as enabling more fine-grained analysis and statistical calculations.

Finally, if you are new to nucleic acid biophysics, you may want to familiarize yourself with basic statistical mechanics and polymer physics. It will be incredibly helpful to review the following concepts:

Thermodynamics of base pairing and melting temperatures.

Persistence length and mechanical rigidity of polymers.

Free energy landscapes and rare-event kinetics (useful for features like Umbrella Sampling and Forward Flux Sampling).