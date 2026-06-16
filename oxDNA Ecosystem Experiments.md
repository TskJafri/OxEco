# Main Page

When we are designing new DNA nanostructures here are some useful tips and tricks we suggest you keep in mind. 

Before even beginning to design your DNA nanostructure it is important to keep in mind your final objective for the DNA nanostructure. DNA nanotechnology encompasses many different design frameworks: [Scaffolded helical bundles](), [scaffolded wireframes](), [scaffold-free wireframes](), [DNA Bricks](), [DNA Slats](), and [small multi-DNA complexes](). 

When deciding which of these methods to use, we ask ourselves several questions: (1) [What size-range do we want for our structure](), (2) [Do we need a rigid or flexible structure](), (3) [Do we need high-yield](), (4) [What is our budget](), (5) [Do we value addressability]()?

These are in addition to functional questions like: (1) [Are we interfacing with living materials](), (2) [What buffer conditions do we require stability in](), (3) [Will these function in solution or on surfaces](), and many more questions to consider unique to your application.

Once you have decided on what class of nanostructure you will design, many existing software have been developed to improve the ease of design.

| Nanostructure Class | Software |
| :---: | :---: |
| [Scaffolded helical bundles]()  | [Cadnano]() and [Scadnano]() |
| [Scaffolded wireframes]() | [Athena]() |
| [Scaffold-free wireframes]() | [Braids]() |
| [DNA Bricks]() | [NanoBricks]() |
| [Crisscross DNA Slats]() | [\#-CAD]() |
| [Small DNA Complexes]() | [Nupack]() |

For all softwares, we recommend using [Nupack]() to minimize the secondary structure of all oligos and [SeqWalk]() to maximize sequence orthogonality. However, for scaffolded approaches it's important to note the designer has much less control over oligo sequences since you’re limited to the complement of the chosen scaffold. For scaffolded origami approaches we recommend two additional tools for improving your design: [dnafold]() and [pyOrigamiBreak](). Finally, for all approaches we recommend simulating your nanostructure with [oxDNA]() to better understand its stability and equilibrium structure.

Now that you’ve designed your nanostructure, it is time to order the oligos, synthesize, and characterize successful formation. Supplies like Integrated DNA Nanotechnologies (IDT), Twist Biosciences, and Eurofins Genomics all sell high-purity oligos.

Once your oligos have arrived it is time to test the formation of your nanostructure and optimize its assembly. Typically, there are three main experimental variables we tune when optimizing assembly: (1) [Thermal annealing ramp](), (2) [Buffer salt concentrations](), and (3) [Staple : Scaffold ratio]() for scaffolded structures. Recommendations for each can be found at the links above\!

To first determine if a structure has folded and in what yield we use gel electrophoresis, either [Polyacrylamide gel electrophoresis (PAGE)]() for small structures or [agarose gel electrophoresis (AGE)]() for larger structures. For both techniques, we recommend always including a DNA ladder and for scaffolded origami, include a scaffold only control well. Without the scaffold only control well, it is easy to mistake an unfolded DNA scaffold for a DNA nanostructure band.

Depending on your application, you may need your nanostructure to be purified from excess oligos or aggregates. Purification methods include [ultrafiltration](), [Polyethylene glycol (PEG) precipitation](), [gel extraction](), [magnetic-bead purification](), [size-exclusion chromatography](), among many others. For simplicity and general effectiveness for megadalton sized nanostructures, we typically use spin filtration, although the optimal method will depend on your nanostructure. Thus, we recommend trying multiple purification methods for each origami depending on the equipment and expertise within your lab. For more information on the benefits and drawbacks of each approach please click the links above.

Following purification, it is important to assess the recovery yield, the purity, and the impact of the purification on the structure. To achieve this we recommend again running gel electrophoresis with the purified samples. From the gel, you can determine if aggregates were removed, excess staples were removed, and if the purification damaged your structure or induced aggregation.

The next step is to perform structural verification using high resolution imaging methods like [atomic force microscopy]() or [transmission electron microscopy](). For the highest information content we recommend AFM for 2D structures and TEM for 3D structures. It is important to keep in mind that both of these methods are imaging nanostructures adsorbed onto a surface. Therefore, the imaged structures may differ from their solution-state form.

For more in-depth tutorials and information, we highly recommend the following resources:  
(1) **Overview of Experimental Procedure:** K. F. Wagenbauer, F. A. S. Engelhardt, E. Stahl, V. K. Hechtl, P. Stömmer, F. Seebacher, L. Meregalli, P. Ketterer, T. Gerling, H. Dietz, ChemBioChem2017, 18, 1873\.  
(2) **Original Implementation of DNA Origami:** Rothemund, P. Folding DNA to create nanoscale shapes and patterns. *Nature* **440**, 297–302 (2006). [https://doi.org/10.1038/nature04586](https://doi.org/10.1038/nature04586)  
(3) **Overview of designing, synthesizing, and characterizing DNA origami:** Castro, C., Kilchherr, F., Kim, DN. *et al.* A primer to scaffolded DNA origami. *Nat Methods* **8**, 221–229 (2011). https://doi.org/10.1038/nmeth.1570  
(4) **DNA Origami and its Applications**: Dey, S., Fan, C., Gothelf, K.V. *et al.* DNA origami. *Nat Rev Methods Primers* **1**, 13 (2021). https://doi.org/10.1038/s43586-020-00009-8

# Scaffolded Helical Bundles

Scaffolded helical bundles are what we typically think of when we say DNA origami. First, created by Paul Rothemund in 2006[1](https://www.zotero.org/google-docs/?70WXN5). This class of structure is characterized by the folding of long DNA scaffolds into helical bundles packed side-by-side and most commonly arranged into either a honeycomb or square. Each lattice arrangement has different pros and cons, and which to choose should depend on your intended application. Briefly:

1. Honeycomb Lattice

Each helix in a honeycomb has 3 possible neighbors arranged at 120 degree angles from each other. A DNA helix can crossover with one of its three neighbors at 7bp intervals (corresponding to about 120 degrees of rotation) and with the same helix at 21bp intervals (2 full turns of a DNA helix)[2,3](https://www.zotero.org/google-docs/?rRhdbI). The honeycomb lattice is the most popular for 3D origami and is thought to provide the most mechanically rigid arrangement. Compared to double stranded DNA, bundling of helices into a honeycomb pattern significantly increases the bending rigidity[4](https://www.zotero.org/google-docs/?qnkwhg). Per unit mass, honeycomb lattice creates origami with larger bending rigidity than square lattices due to a higher cross-section[5](https://www.zotero.org/google-docs/?yatx2k). The honeycomb lattice cross over spacing complies with the natural B-form DNA twist density. Square lattice cross over spacing causes slight underwinding, and thus honeycomb lattices typically have less torsional strain than square lattices.

2. Square Lattice

Each DNA helix can have up to 4 neighbors which are arranged at 90 degree angles from each other. A DNA helix can crossover with one of its three neighbors at 8bp intervals (corresponding to about 90 degrees of rotation) and with the same helix at 32bp intervals (about 3 full turns of a DNA helix)[6](https://www.zotero.org/google-docs/?WZ5mA5). This lattice arrangement is popular when flat surfaces are desired, like in 2D origami or origami being deposited on surfaces. The crossover spacing leads to a slight underwinding which can contribute to a right-handed global twist. Methods involving strategically placed insertions and deletions have been developed to compensate for and correct this twist[7](https://www.zotero.org/google-docs/?YZVWqm). Compared to the honeycomb lattice, the helical packing density is higher. Compared to honeycomb lattices, square lattices can achieve a greater density of addressable pixels[8](https://www.zotero.org/google-docs/?u4e2IR).

When designing your origami, other important considerations include scaffold choice, scaffold routing, staple routing, and crossover spacing.

**Scaffold choice** controls the size of your origami and also controls the sequence of your staples.

**Scaffold routing** can affect the yield, folding pathway, and structural stability of your origami[9](https://www.zotero.org/google-docs/?PWYmEb). As the scaffold is folded by staples there is an entropic penalty to confine the scaffold. Minimizing the entropic penalty of folding the scaffold and increasing cooperativity are two pathways thought to improve folding yield[10](https://www.zotero.org/google-docs/?wGJMGp). Generally this can be achieved by reducing the number of scaffold crossovers but careful consideration is required for each design[11](https://www.zotero.org/google-docs/?3qmYY0). The routing also affects structural stability as scaffold ‘seams’, regions of the origami where the scaffold crosses over are mechanically weak points[12](https://www.zotero.org/google-docs/?lL5c4b).

**Staple routing** can also affect the yield, folding pathway, and structural stability of your origami. Similar to scaffold routing, consideration of your final intended function and origami shape are important when choosing staple routing. For improving yield of your origami, it is generally recommended to maximize the enthalpically favorable hybridization energy between staple and scaffold while minimizing the entropic penalty of scaffold loop closure. It is also important to ensure each domain of a staple is stable (\>8bp minimum). In addition, crossovers are considered mechanical weak points[13](https://www.zotero.org/google-docs/?Ek5JXi), but crossover rich regions often have less structural fluctuations[12](https://www.zotero.org/google-docs/?JxuH8k).

**Crossover spacing** can affect yield and structural properties. Increased crossover spacing can increase the structural rigidity of the origami, but it can also increase the internal strain. It can have functional consequences as well. Typically increased crossover densities require greater magnesium concentrations, but they are also less susceptible to nuclease degradation[14](https://www.zotero.org/google-docs/?3Q6Dz1).  
 

**References**  
[1\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Rothemund, P. W. K. Folding DNA to create nanoscale shapes and patterns. *Nature* **440**, 297–302 (2006).](https://www.zotero.org/google-docs/?fKq1Ub)   
[2\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Reshetnikov, R. V. *et al.* A coarse-grained model for DNA origami. *Nucleic Acids Res* **46**, 1102–1112 (2018).](https://www.zotero.org/google-docs/?fKq1Ub)   
[3\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Castro, C. E. *et al.* A primer to scaffolded DNA origami. *Nat Methods* **8**, 221–229 (2011).](https://www.zotero.org/google-docs/?fKq1Ub)   
[4\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Kauert, D. J., Kurth, T., Liedl, T. & Seidel, R. Direct Mechanical Measurements Reveal the Material Properties of Three-Dimensional DNA Origami. *Nano Lett.* **11**, 5558–5563 (2011).](https://www.zotero.org/google-docs/?fKq1Ub)   
[5\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Shih, W. M. & Lin, C. Knitting complex weaves with DNA origami. *Current Opinion in Structural Biology* **20**, 276–282 (2010).](https://www.zotero.org/google-docs/?fKq1Ub)   
[6\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Ke, Y. *et al.* Multilayer DNA Origami Packed on a Square Lattice. *J Am Chem Soc* **131**, 15903 (2009).](https://www.zotero.org/google-docs/?fKq1Ub)   
[7\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Dietz, H., Douglas, S. M. & Shih, W. M. Folding DNA into Twisted and Curved Nanoscale Shapes. *Science* **325**, 725–730 (2009).](https://www.zotero.org/google-docs/?fKq1Ub)   
[8\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Kilwing, L. *et al.* Multilayer DNA Origami with Terminal Interfaces That Are Flat and Wide-Area. *ACS Nano* **18**, 885–893 (2024).](https://www.zotero.org/google-docs/?fKq1Ub)   
[9\.](https://www.zotero.org/google-docs/?fKq1Ub)	[DeLuca, M. *et al.* Mechanism of DNA origami folding elucidated by mesoscopic simulations. *Nat Commun* **15**, 3015 (2024).](https://www.zotero.org/google-docs/?fKq1Ub)   
[10\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Aksel, T., J. Navarro, E., Fong, N. & Douglas, S. M. Design principles for accurate folding of DNA origami. *Proceedings of the National Academy of Sciences* **121**, e2406769121 (2024).](https://www.zotero.org/google-docs/?fKq1Ub)   
[11\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Mohammadi‐Zerankeshi, M., Houston, J., Elisha‐Wigwe, O. K. U., Sachi, A. & Marras, A. E. Unraveling the Folding Dynamics of DNA Origami Structures. *Small* **21**, e04855 (2025).](https://www.zotero.org/google-docs/?fKq1Ub)   
[12\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Coarse-grained modelling of the structural properties of DNA origami | Nucleic Acids Research | Oxford Academic. https://academic.oup.com/nar/article/47/3/1585/5271501.](https://www.zotero.org/google-docs/?fKq1Ub)   
[13\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Gerling, T., Kube, M., Kick, B. & Dietz, H. Sequence-programmable covalent bonding of designed DNA assemblies. *Science Advances* **4**, eaau1157 (2018).](https://www.zotero.org/google-docs/?fKq1Ub)   
[14\.](https://www.zotero.org/google-docs/?fKq1Ub)	[Xin, Y. *et al.* Environment-Dependent Stability and Mechanical Properties of DNA Origami Six-Helix Bundles with Different Crossover Spacings. *Small* **18**, 2107393 (2022).](https://www.zotero.org/google-docs/?fKq1Ub) 

# Scaffolded Wireframes

DNA scaffolded wireframes are a technique where a long ssDNA scaffold (typically identical to that of the helical bundle DNA nanostructures) is folded into geometric shapes resembling a mesh. As opposed to helical bundles where the DNA helices fill a volume, the wireframe origami helices define the vertices and the edge of the structure with a hollow volume.  Whether to use wireframe origami or tightly packed helical origami depends on your application as each class has distinct pros and cons. Wireframe origami generally require less scaffold for a given volume or area, making them more materially efficient. They typically have higher stability in low cationic environments due to their reduced DNA density[1](https://www.zotero.org/google-docs/?JJsYqW). They are often less rigid structurally since the helices are not packed together. Finally, they have different interactions with cellular systems than helically packed origami[2](https://www.zotero.org/google-docs/?bwP7sH). When designing scaffolded wireframes, there are two unique design considerations: Scaffold routing and edge architecture.

**Scaffold routing** for wireframe origami is typically broken down into two categories: A-trail and spanning tree.

1) **Spanning tree** routing forms the scaffold into a single Eulerian circuit[3](https://www.zotero.org/google-docs/?lQd4ZG).   
2) **A-trail** routing forms the scaffold into a single unknotted Eulerian circuit[4](https://www.zotero.org/google-docs/?tT15UJ). Depending on your design, A-trail routing may be impossible. If the design is compatible with A-trail routing, A-trail routing enables greater control over local mechanical stiffness[4](https://www.zotero.org/google-docs/?797XSx). 

**Edge Architecture** is the number of helices that comprise an edge. Each edge of a wireframe can consist of single helices or bundles of multiple helices. Using larger helical bundles typically increases structural fidelity[5](https://www.zotero.org/google-docs/?Z6g5en), but it can reduce the stability in low cationic environments[6](https://www.zotero.org/google-docs/?tErxHW) and requires larger scaffolds for given volumes.

**References**  
[1\.](https://www.zotero.org/google-docs/?ra7h4n)	[Linko, V. & Keller, A. Stability of DNA Origami Nanostructures in Physiological Media: The Role of Molecular Interactions. *Small* **19**, 2301935 (2023).](https://www.zotero.org/google-docs/?ra7h4n)   
[2\.](https://www.zotero.org/google-docs/?ra7h4n)	[Wang, Y. *et al.* DNA Origami Penetration in Cell Spheroid Tissue Models is Enhanced by Wireframe Design. *Advanced Materials* **33**, 2008457 (2021).](https://www.zotero.org/google-docs/?ra7h4n)   
[3\.](https://www.zotero.org/google-docs/?ra7h4n)	[Designer nanoscale DNA assemblies programmed from the top down | Science. https://www.science.org/doi/10.1126/science.aaf4388.](https://www.zotero.org/google-docs/?ra7h4n)   
[4\.](https://www.zotero.org/google-docs/?ra7h4n)	[Lolaico, M., Blokhuizen, S., Shen, B., Wang, Y. & Högberg, B. Computer-Aided Design of A-Trail Routed Wireframe DNA Nanostructures with Square Lattice Edges. *ACS Nano* **17**, 6565–6574 (2023).](https://www.zotero.org/google-docs/?ra7h4n)   
[5\.](https://www.zotero.org/google-docs/?ra7h4n)	[Jun, H., Wang, X., Bricker, W. P. & Bathe, M. Automated sequence design of 2D wireframe DNA origami with honeycomb edges. *Nat Commun* **10**, 5419 (2019).](https://www.zotero.org/google-docs/?ra7h4n)   
[6\.](https://www.zotero.org/google-docs/?ra7h4n)	[Wamhoff, E.-C. *et al.* Controlling Nuclease Degradation of Wireframe DNA Origami with Minor Groove Binders. *ACS Nano* **16**, 8954–8966 (2022).](https://www.zotero.org/google-docs/?ra7h4n) 

# Scaffold-free wireframes

Scaffold-free DNA wireframes are nanostructures where the nanostructure’s helices define the vertices and the edge of the structure with a hollow volume[1](https://www.zotero.org/google-docs/?JLC3Em). However there is no long scaffold strand that is routed between all the edges. This overcomes limitations inherent in scaffolded wireframe systems. Specifically, no size constraints imposed by the available scaffolds and no algorithmic challenge of finding physically feasible scaffold routes. Although improving, structures designed with this approach suffer from low yield[1](https://www.zotero.org/google-docs/?gjsRa4) compared to similarly sized scaffolded approaches. In addition, since strands are added at equimolar concentrations this approach is more susceptible to manual errors, local defects, and yield will decrease with complexity.

**References:**  
[1\.](https://www.zotero.org/google-docs/?K5dr8Q)	[Wang, W. *et al.* Automated design of scaffold-free DNA wireframe nanostructures. *Nat Commun* **16**, 4666 (2025).](https://www.zotero.org/google-docs/?K5dr8Q) 

# DNA Bricks

DNA bricks are 32nt DNA strands that can bind to up to 4 neighboring DNA strands through 4 distinct 8nt binding domains[1](https://www.zotero.org/google-docs/?Va6lmH). Bricks connect with each other at 90 degree angles and each 8bp duplex can be considered one voxel of 2.5nm x 2.5nm x 2.7nm. Domain lengths can also be increased and 13nt domain lengths enabled structures to be synthesized consisting of up to tens of thousands of DNA strands and sizes of 100nm x 100nm x 100nm. This technique increases the component complexity compared to other DNA nanostructures classes by about 100x. Another advantage of the DNA bricks approach is the modularity it provides. Using a single batch of DNA strands, many structures of different shapes and sizes can be assembled using different combinations of the strands. However, DNA bricks are limited in size due to high cost, they are often synthesized in low yield and are subject to local defects due to DNA strands being added in equimolar concentrations.

**References**  
[1\.](https://www.zotero.org/google-docs/?NSqLno)	[Ke, Y., Ong, L. L., Shih, W. M. & Yin, P. Three-Dimensional Structures Self-Assembled from DNA Bricks. *Science* **338**, 1177–1183 (2012).](https://www.zotero.org/google-docs/?NSqLno) 

# DNA Slats

Multi-micron DNA structures assembled from criss-cross DNA slats is a recently developed technique that has pushed DNA origami to the micron scale using hierarchical joining and nucleation[1](https://www.zotero.org/google-docs/?1frUty). Criss-cross polymerization relies on 6HB or 12HB DNA origami with weak binding handles as the monomer unit. By adding a seed that nucleates growth, criss-cross polymerization is able to realize both finite and infinite assembly of large micron scale structures. This technique has been used to create megastructures with high yield of 2um x 2um with over 10,000 addressable nodes. This technique has advanced the size of addressable DNA nanostructures possible. However, these structures are mostly limited to 2D. 

**References:**  
[1\.](https://www.zotero.org/google-docs/?zfPewO)	[Wintersinger, C. M. *et al.* Multi-micron crisscross structures grown from DNA-origami slats. *Nat. Nanotechnol.* **18**, 281–289 (2023).](https://www.zotero.org/google-docs/?zfPewO) 

# Small DNA Complexes

Small DNA constructs like 4-strand tetrahedrons[1](https://www.zotero.org/google-docs/?K9tp8a) and 6 strand nanopores[2](https://www.zotero.org/google-docs/?cPuOGj) are small constructs typically less than 10nm that utilize equimolar concentrations of oligos mixed together to form structures typically \<10nm. These structures are widely used for their simplicity.

**References:**  
[1\.](https://www.zotero.org/google-docs/?6sZ5OT)	[Goodman, R. P. *et al.* Rapid Chiral Assembly of Rigid DNA Building Blocks for Molecular Nanofabrication. *Science* **310**, 1661–1665 (2005).](https://www.zotero.org/google-docs/?6sZ5OT)   
[2\.](https://www.zotero.org/google-docs/?6sZ5OT)	[Burns, J. R., Stulz, E. & Howorka, S. Self-Assembled DNA Nanopores That Span Lipid Bilayers. *Nano Lett.* **13**, 2351–2356 (2013).](https://www.zotero.org/google-docs/?6sZ5OT) 

# Origami Size

For DNA nanostructures, choosing what class of structure to use depends on what size you want the origami to be. For \<10nm, small multi strand complexes like tetrahedra[1](https://www.zotero.org/google-docs/?2Ay7D7) are typically chosen. For nanostructures in the 100nm range scaffolded origami are a common choice[2](https://www.zotero.org/google-docs/?V51EA2). Within scaffolded origami, designers can retain size control by choosing scaffolds of different lengths[3](https://www.zotero.org/google-docs/?7mOKFx). Mini scaffolds can be prepared or purchased for origami in the 10-30nm range. For structures \>500nm, 2 main approaches exist: Hierarchical assembly of multi-origami complexes[4–6](https://www.zotero.org/google-docs/?CNRWGF) or DNA bricks[7](https://www.zotero.org/google-docs/?ew9Rsw).

**References:**  
[1\.](https://www.zotero.org/google-docs/?CqtGHg)	[Goodman, R. P. *et al.* Rapid Chiral Assembly of Rigid DNA Building Blocks for Molecular Nanofabrication. *Science* **310**, 1661–1665 (2005).](https://www.zotero.org/google-docs/?CqtGHg)   
[2\.](https://www.zotero.org/google-docs/?CqtGHg)	[Rothemund, P. W. K. Folding DNA to create nanoscale shapes and patterns. *Nature* **440**, 297–302 (2006).](https://www.zotero.org/google-docs/?CqtGHg)   
[3\.](https://www.zotero.org/google-docs/?CqtGHg)	[Brown, S. *et al.* An easy-to-prepare mini-scaffold for DNA origami. *Nanoscale* **7**, 16621–16624 (2015).](https://www.zotero.org/google-docs/?CqtGHg)   
[4\.](https://www.zotero.org/google-docs/?CqtGHg)	[Tikhomirov, G., Petersen, P. & Qian, L. Fractal assembly of micrometre-scale DNA origami arrays with arbitrary patterns. *Nature* **552**, 67–71 (2017).](https://www.zotero.org/google-docs/?CqtGHg)   
[5\.](https://www.zotero.org/google-docs/?CqtGHg)	[Wintersinger, C. M. *et al.* Multi-micron crisscross structures grown from DNA-origami slats. *Nat. Nanotechnol.* **18**, 281–289 (2023).](https://www.zotero.org/google-docs/?CqtGHg)   
[6\.](https://www.zotero.org/google-docs/?CqtGHg)	[Wagenbauer, K. F., Sigl, C. & Dietz, H. Gigadalton-scale shape-programmable DNA assemblies. *Nature* **552**, 78–83 (2017).](https://www.zotero.org/google-docs/?CqtGHg)   
[7\.](https://www.zotero.org/google-docs/?CqtGHg)	[Ke, Y., Ong, L. L., Shih, W. M. & Yin, P. Three-Dimensional Structures Self-Assembled from DNA Bricks. *Science* **338**, 1177–1183 (2012).](https://www.zotero.org/google-docs/?CqtGHg) 

# Rigid vs Flexible

DNA nanostructure rigidity can be modified through design considerations like crossover spacing and helical lattice arrangement. Typically higher crossover densities correspond to more rigid structures. Flexibility can be programmed into nanostructures by having single stranded regions that act as flexible hinges[1](https://www.zotero.org/google-docs/?fnndA6). Within nanostructures nick sites also are flexible regions and ligating staples together is an existing method for increasing rigidity[2](https://www.zotero.org/google-docs/?Oe4ui6). 

**Reference:**  
[1\.](https://www.zotero.org/google-docs/?PPqYQQ)	[Lee, J. Y., Kim, M., Lee, C. & Kim, D.-N. Characterizing and Harnessing the Mechanical Properties of Short Single-Stranded DNA in Structured Assemblies. *ACS Nano* **15**, 20430–20441 (2021).](https://www.zotero.org/google-docs/?PPqYQQ)   
[2\.](https://www.zotero.org/google-docs/?PPqYQQ)	[Rajendran, A., Krishnamurthy, K., Giridasappa, A., Nakata, E. & Morii, T. Stabilization and structural changes of 2D DNA origami by enzymatic ligation. *Nucleic Acids Res* **49**, 7884–7900 (2021).](https://www.zotero.org/google-docs/?PPqYQQ) 

# Yield

DNA nanostructure yield varies significantly by the class of structure chosen as well as the design. Typically scaffolded methods can achieve higher yield because staples can be added in excess reducing concentration dependent issues. Modifying staple routing, scaffold routing, and lattice arrangement all impact the stability[1](https://www.zotero.org/google-docs/?ZJZHvF). For a structure, modifying the staple and scaffold design can result in vast improvements of nanostructure yield. For a given design, experimental synthesis conditions also drastically affect the folding yield. Modifying the annealing protocol, cation concentration, and staple:scaffold ratio all can improve or hurt your yield. To determine the yield, three methods are commonly used. Gel electrophoresis is used to pseudo-quantify folding yield by determining the ratio of intensity within the band corresponding to well formed structure to the total intensity within the gel lane. Particle counting in atomic force microscopy (AFM) is a more quantitative, but more tedious, method for yield determination of 2D structures. Particle counting with transmission electron microscopy (TEM) is also a quantitative, but again tedious, method for yield determination of 3D structures.

**References:**  
[1\.](https://www.zotero.org/google-docs/?MhpcJf)	[Aksel, T., J. Navarro, E., Fong, N. & Douglas, S. M. Design principles for accurate folding of DNA origami. *Proceedings of the National Academy of Sciences* **121**, e2406769121 (2024).](https://www.zotero.org/google-docs/?MhpcJf) 

# Budget

Your budget will be an influential consideration when designing your DNA nanostructure. The cost of synthesizing your origami correlates with the number of unique DNA strands you intend to order. For a scaffolded origami using the typical M13mp18 DNA scaffold, usually 200-250 oligos are required. For large assemblies using DNA bricks or criss-cross slats this number increases to the range of 10,000 and 2,000 respectively[1,2](https://www.zotero.org/google-docs/?EDVNSh). Fractal assembly is a promising alternative to scaling up DNA nanostructure size without the price scaling linearly[3](https://www.zotero.org/google-docs/?XoTJ0r). Fractal assembly is a hierarchical multi-stage assembly process where self-similar nanostructures are joined together into increasingly larger arrays at each stage. Self-similarity allows the design of larger structures with a single pool of DNA staples.

Another large budgetary consideration is whether you need modified oligos for your nanostructure. Modifications include biotin, fluorophores, alkyne groups, etc. Modifications often increase the price of oligos from 2x to greater than 50x what the unmodified equivalent would cost.

**References:**  
[1\.](https://www.zotero.org/google-docs/?wYN9Ji)	[Ke, Y., Ong, L. L., Shih, W. M. & Yin, P. Three-Dimensional Structures Self-Assembled from DNA Bricks. *Science* 338, 1177–1183 (2012).](https://www.zotero.org/google-docs/?wYN9Ji)   
[2\.](https://www.zotero.org/google-docs/?wYN9Ji)	[Wintersinger, C. M. *et al.* Multi-micron crisscross structures grown from DNA-origami slats. *Nat. Nanotechnol.* 18, 281–289 (2023).](https://www.zotero.org/google-docs/?wYN9Ji)   
[3\.](https://www.zotero.org/google-docs/?wYN9Ji)	[Tikhomirov, G., Petersen, P. & Qian, L. Fractal assembly of micrometre-scale DNA origami arrays with arbitrary patterns. *Nature* 552, 67–71 (2017).](https://www.zotero.org/google-docs/?wYN9Ji) 

# Addressability

One of the most important advantages of DNA nanotechnology is its ability to precisely localize organic and inorganic particles at distinct positions. Due to the programmability and well characterized geometry of DNA nanostructure, we can precisely position molecules at distinct distances by attaching them to nucleotides on the DNA nanostructure. Advanced modeling tools like oxDNA help us ascertain confidence in the relative distance between nucleotides and predict the fluctuations in the relative distances. Biological materials are often patterned on DNA origami using biotin-avidin interactions[1](https://www.zotero.org/google-docs/?1EtOnf). Biotin-modified oligos are commercially available at affordable prices[2](https://www.zotero.org/google-docs/?Vr4b4o). Alternatively, click chemistry can be used for covalent conjugation[3](https://www.zotero.org/google-docs/?MP4Z3C). Inorganic particles, like gold, are often attached through thiol groups[4](https://www.zotero.org/google-docs/?rawXj7). Square lattice origami can achieve greater density of addressable pixels (3.5nm) compared to honeycomb lattices (4.3nm)[5](https://www.zotero.org/google-docs/?WClm2L). For even more tightly packed addressable pixels, the terminal face of 3D origami can be used (2.5nm)[5](https://www.zotero.org/google-docs/?0uPgrU).

**References:**  
[1\.](https://www.zotero.org/google-docs/?QbVQrz)	[Hellmeier, J. *et al.* Strategies for the Site-Specific Decoration of DNA Origami Nanostructures with Functionally Intact Proteins. *ACS Nano* 15, 15057–15068 (2021).](https://www.zotero.org/google-docs/?QbVQrz)   
[2\.](https://www.zotero.org/google-docs/?QbVQrz)	[Integrated DNA Technologies | IDT. https://www.idtdna.com/page.](https://www.zotero.org/google-docs/?QbVQrz)   
[3\.](https://www.zotero.org/google-docs/?QbVQrz)	[Knappe, G. A., Wamhoff, E.-C., Read, B. J., Irvine, D. J. & Bathe, M. In Situ Covalent Functionalization of DNA Origami Virus-like Particles. *ACS Nano* 15, 14316–14322 (2021).](https://www.zotero.org/google-docs/?QbVQrz)   
[4\.](https://www.zotero.org/google-docs/?QbVQrz)	[Chen, K., Li, X. & Yang, J. Precise Control of Gold Nanoparticles on DNA Origami for Logic Operation. *Journal of Nanomaterials* 2019, 4890326 (2019).](https://www.zotero.org/google-docs/?QbVQrz)   
[5\.](https://www.zotero.org/google-docs/?QbVQrz)	[Kilwing, L. *et al.* Multilayer DNA Origami with Terminal Interfaces That Are Flat and Wide-Area. *ACS Nano* 18, 885–893 (2024).](https://www.zotero.org/google-docs/?QbVQrz) 

# Living Materials

DNA nanotechnology has been extensively studied as a biomedical platform and as a biophysical probe. For both, the DNA nanostructure can intentionally, or unintentionally, measure and perturb the biological material it is interacting with. There are many important considerations when designing DNA nanostructures for use with cells *in vitro* or *in vivo*. If you intend to work in physiological fluids containing serum or free floating proteins, these proteins can non-specifically interact with your nanostructure and alter its intended shape and function[1](https://www.zotero.org/google-docs/?MRS4wX). In addition, DNA nanostructures are highly negatively charged so they will interact electrostatically with cell surface glycocalyx, proteins, and lipid membranes[2](https://www.zotero.org/google-docs/?piqLdK). For anchoring structures onto cell surfaces, researchers often functionalize their nanostructure with hydrophobic moieties like cholesterol which insert into lipid membranes[3](https://www.zotero.org/google-docs/?I6crs7). Compared to proteins, DNA origami synthesized using the standard M13mp18 scaffold are significantly larger, on the order of 100x the size of a typical protein. For this reason, many applications of DNA nanotechnology for biophysics rely on small multi-strand DNA complexes, like DNA tetrahedrons, which are likely to perturb cells less and are on the same size scale as proteins.

For applications within cells, nanostructures must first be internalized. Given their hydrophilicity and highly negative charge this itself is often a challenge[2](https://www.zotero.org/google-docs/?9zqTlV). Improvements in uptake have been achieved by using transfection reagents[4](https://www.zotero.org/google-docs/?FOPE7C) or adding molecules that bind nanostructures to cell surfaces[5](https://www.zotero.org/google-docs/?WDOY6G). When uptaken, they are typically engulfed into cells via scavenger receptors, clatherin-mediated endocytosis, and caveolin-mediated endocytosis[6](https://www.zotero.org/google-docs/?KzdGPe). Nanostructure size, shape, aspect-ratio as well as other structural factors are known to play a role in uptake efficiency, however there is no clear consensus on the rules governing their uptake and it is likely cell-type specific[7](https://www.zotero.org/google-docs/?XkqcjM). Once inside the cell, nanostructures are in an environment with low levels of magnesium. The ionic concentrations in the cytoplasm are typically inconsistent with origami folding buffer and are often inadequate to maintain a stable structure.

Despite these challenges, biomedical and biophysical applications of DNA nanotechnology continue to be driven forward, and progress is being made in addressing the limitations. 

**References:**  
[1\.](https://www.zotero.org/google-docs/?hJbzJR)	[Smolková, B. *et al.* Protein Corona Inhibits Endosomal Escape of Functionalized DNA Nanostructures in Living Cells. *ACS applied materials & interfaces* 13, 46375 (2021).](https://www.zotero.org/google-docs/?hJbzJR)   
[2\.](https://www.zotero.org/google-docs/?hJbzJR)	[Liu, Y. *et al.* The effects of overhang placement and multivalency on cell labeling by DNA origami. *Nanoscale* 13, 6819–6828 (2021).](https://www.zotero.org/google-docs/?hJbzJR)   
[3\.](https://www.zotero.org/google-docs/?hJbzJR)	[Wu, N. *et al.* Functional and Biomimetic DNA Nanostructures on Lipid Membranes. *Langmuir* 34, 14721–14730 (2018).](https://www.zotero.org/google-docs/?hJbzJR)   
[4\.](https://www.zotero.org/google-docs/?hJbzJR)	[Okholm, A. H. *et al.* Quantification of cellular uptake of DNA nanostructures by qPCR. *Methods* 67, 193–197 (2014).](https://www.zotero.org/google-docs/?hJbzJR)   
[5\.](https://www.zotero.org/google-docs/?hJbzJR)	[Mikkilä, J. *et al.* Virus-Encapsulated DNA Origami Nanostructures for Cellular Delivery. *Nano Lett.* 14, 2196–2200 (2014).](https://www.zotero.org/google-docs/?hJbzJR)   
[6\.](https://www.zotero.org/google-docs/?hJbzJR)	[Wang, W. *et al.* Cell–Surface Binding of DNA Nanostructures for Enhanced Intracellular and Intranuclear Delivery. *ACS Appl. Mater. Interfaces* 16, 15783–15797 (2024).](https://www.zotero.org/google-docs/?hJbzJR)   
[7\.](https://www.zotero.org/google-docs/?hJbzJR)	[Bastings, M. M. C. *et al.* Modulation of the Cellular Uptake of DNA Origami through Control over Mass and Shape. *Nano Lett.* 18, 3557–3564 (2018).](https://www.zotero.org/google-docs/?hJbzJR) 

# Buffer

DNA nanostructures are typically annealed in magnesium containing buffers which enable the DNA strands to fold by mitigating electrostatic repulsion. However, some functional applications of nanostructures may require buffers incompatible with those typically used for folding. The ability of a nanostructure to withstand low cationic salt conditions is considered related to the density of the DNA helices and other design parameters. For this reason, wireframe nanostructures are generally more stable in low salt conditions than tightly packed helical bundles[1](https://www.zotero.org/google-docs/?hrsUjR).

**References:**  
[1\.](https://www.zotero.org/google-docs/?VVCJ1k)	[Linko, V. & Keller, A. Stability of DNA Origami Nanostructures in Physiological Media: The Role of Molecular Interactions. *Small* **19**, 2301935 (2023).](https://www.zotero.org/google-docs/?VVCJ1k) 

# Surface vs Solution

DNA nanostructures are used for both surface based and solution based applications. For surface based applications, unique design considerations need to be studied. Different shapes will maximize contact area with the surface, and surface interactions can affect the structure of the nanostructure. For example, a tubular DNA nanostructure can unroll when interacting with mica due to its propensity to adsorb onto the surface[1](https://www.zotero.org/google-docs/?Qvno1B). For nanostructures functioning in solution, it’s important to recognize that typical high resolution imaging methods (AFM and TEM) all image nanostructures on a surface. Therefore, MD simulations like oxDNA are useful for inferring equilibrium structure in solution.

**References:**  
[**1\.**](https://www.zotero.org/google-docs/?R7CEkK)	**[Wei, B. *et al.* Design Space for Complex DNA Structures. *J. Am. Chem. Soc.* 135, 18080–18088 (2013).](https://www.zotero.org/google-docs/?R7CEkK)** 

# CadNano

Cadnano is a GUI for designing 2D and 3D DNA origami nanostructures developed by Douglas et al[1](https://www.zotero.org/google-docs/?ETbDbR). 

**References:**  
[1\.](https://www.zotero.org/google-docs/?puYecA)	[Douglas, S. M. *et al.* Rapid prototyping of 3D DNA-origami shapes with caDNAno. *Nucleic Acids Res* **37**, 5001–5006 (2009).](https://www.zotero.org/google-docs/?puYecA) 

# ScadNano

Scadnano is a browser-based tool for designing 2D and 3D DNA origami. It is also a scriptable python tool enabling more rapid origami design[1](https://www.zotero.org/google-docs/?5kMLRv).

**References:**  
[1\.](https://www.zotero.org/google-docs/?oYcErZ)	[Doty, D., Lee, B. L. & Stérin, T. scadnano: A browser-based, scriptable tool for designing DNA nanostructures. Preprint at https://doi.org/10.48550/arXiv.2005.11841 (2020).](https://www.zotero.org/google-docs/?oYcErZ) 

# NanoBricks

Nanobricks enables voxel based construction of 2D and 3D DNA nanostructures constructed using the DNA bricks method[1,2](https://www.zotero.org/google-docs/?p20fqp).

**References:**  
[1\.](https://www.zotero.org/google-docs/?lO7q81)	[NANOBRICKS.SOFTWARE. https://nanobricks.software/.](https://www.zotero.org/google-docs/?lO7q81)   
[2\.](https://www.zotero.org/google-docs/?lO7q81)	[Ong, L. L. *et al.* Programmable self-assembly of three-dimensional nanostructures from 10,000 unique components. *Nature* **552**, 72–77 (2017).](https://www.zotero.org/google-docs/?lO7q81) 

# Nupack

Nupack is a software suite for the design and analysis of DNA strands and multi-strand complexes[1](https://www.zotero.org/google-docs/?hYQZ9y). Nupack can be used to predict oligo’s secondary structure, as well as the complementary interactions between arbitrary numbers of nucleotides.

**References:**  
[1\.](https://www.zotero.org/google-docs/?pGMdao)	[Fornace, M. E. *et al.* NUPACK: Computational Nucleic Acid Analysis and Design. *ACS Synth. Biol.* 15, 1426–1441 (20**26).**](https://www.zotero.org/google-docs/?pGMdao) 

# SeqWalk

Seqwalk is a python package enabling rapid, facile construction of large orthogonal DNA oligo libraries[1](https://www.zotero.org/google-docs/?E1YKuY). Using orthogonal oligos can help mitigate unwanted, off-target interactions.

**References:**  
[1\.](https://www.zotero.org/google-docs/?Nuq6h1)	[Gowri, G., Sheng, K. & Yin, P. Scalable design of orthogonal DNA barcode libraries. *Nat Comput Sci* **4**, 423–428 (2024).](https://www.zotero.org/google-docs/?Nuq6h1) 

# dnafold

Dnafold enables dynamic modeling of DNA origami unfolding, which is inaccessible to oxDNA in reasonable time and computing power[1,2](https://www.zotero.org/google-docs/?vi14FI). Dnafold is a mesoscopic model that represents DNA at a resolution of 8nts per bead. It utilizes a switchable force field to model the properties of ssDNA and dsDNA. With this coarse-grained representation, Brownian dynamics simulations are conducted that capture the full assembly of DNA origami structures from scaffold and staple components.

**References:**  
[1\.](https://www.zotero.org/google-docs/?LfQ60s)	[DeLuca, M. *et al.* Mechanism of DNA origami folding elucidated by mesoscopic simulations. *Nat Commun* 15, 3015 (2024).](https://www.zotero.org/google-docs/?LfQ60s)   
[2\.](https://www.zotero.org/google-docs/?LfQ60s)	[DeLuca, M. marcello-deluca/dnafold. (2025).](https://www.zotero.org/google-docs/?LfQ60s) 

# pyOrigamiBreak

pyOrigamiBreak is a software tool that automates DNA origami design optimization[1–3](https://www.zotero.org/google-docs/?m1dxIj). As input, pyOrigamiBreak parses an incomplete Cadnano design with staples unbroken. From this incomplete design, pyOrigamiBreak calculates the optimal staple break positions and returns a completed design with these optimal breaks and a score report. The staple break positions are chosen by predicting the probability an origami design folds accurately, which is the product of the probabilities of folding each staple. Using a Boltzmann distribution, probability is expressed in terms of the Gibbs free energy change between unfolded and folded staples. The total Gibbs free energy for each staple binding to the scaffold consists of three components: (1) Meeting \- unfavorable, (2) Loop closure \- unfavorable, (3) Hybridization \- favorable. Thus, the scoring function selects the design that maximizes favorable hybridization while minimizing loop closure penalties. The first term (Meeting) relies solely on the scaffold and staple concentrations, and thus will not contribute to the selection of a design if experimental conditions are constant.

**References:**  
[1\.](https://www.zotero.org/google-docs/?BlZPB0)	[Aksel, T., J. Navarro, E., Fong, N. & Douglas, S. M. Design principles for accurate folding of DNA origami. *Proceedings of the National Academy of Sciences* **121**, e2406769121 (2024).](https://www.zotero.org/google-docs/?BlZPB0)   
[2\.](https://www.zotero.org/google-docs/?BlZPB0)	[douglaslab/pyOrigamiBreak. Douglas Lab (2026).](https://www.zotero.org/google-docs/?BlZPB0)   
[3\.](https://www.zotero.org/google-docs/?BlZPB0)	[Douglas, S. M. *et al.* Rapid prototyping of 3D DNA-origami shapes with caDNAno. *Nucleic Acids Res* **37**, 5001–5006 (2009).](https://www.zotero.org/google-docs/?BlZPB0) 

# oxDNA

The oxDNA model of nucleic acids is used for coarse-grained molecular dynamics simulations to study the behavior of DNA from single strands to multi-origami complexes.

# Thermal annealing ramp

When synthesizing a nanostructure, DNA staples and scaffold are heated up (often to 80C) before being slowly cooled to room temperature. The maximum temperature and the rate of cooling are two parameters to be considered. The maximum temperature should be chosen high enough such that all oligo’s secondary structure will be melted as will any DNA duplexes. Physically, after high temperature incubation all staples and scaffold are single-stranded. Now as the temperature is slowly cooled sequential origami folding occurs. At high temperatures, only staples with high melting temperatures will bind stably to the scaffold. These staples then constrain the scaffold geometry before staples with lower melting temperatures bind to the scaffold and continue the folding process. For typical designs, the folding occurs primarily between 40-60C. For your specific design, you can utilize tools like Nupack to predict your staples’ melting temperatures to better optimize your ramp. Within this temperature range, the cooling rate is most important as that is when most of the folding will occur. If the ramp is too fast, staples may not find their correct binding sites and non-optimal binding can become irreversibly stable at lower temperatures. This can manifest as a reduction in yield or greater frequency of misfolded structures with improper staple incorporations. If the ramp is too slow, the optimal yield will likely be achieved but the synthesis time can become impractically long and reduce the rate at which experiments can be performed. For some origami slow, long anneals can increase aggregation and the presence of undesired multimers[1](https://www.zotero.org/google-docs/?kdPPIE).

Generally, focused ramps are recommended as the most efficient, yet productive ramps[1,2](https://www.zotero.org/google-docs/?L8tRjN). Focused ramps cool the sample quickly outside the productive folding range and then cool the sample slowly within the primary folding range (around the staple melting temperatures).

**References:**  
[1\.](https://www.zotero.org/google-docs/?0TdbYp)	[Dey, A. *et al.* Effect of Temperature Ramp in Rapid Folding of 3D DNA Origami Structures. *Small Structures* **7**, e202500682 (2026).](https://www.zotero.org/google-docs/?0TdbYp)   
[2\.](https://www.zotero.org/google-docs/?0TdbYp)	[Mohammadi-Zerankeshi, M., Houston, J., Elisha-Wigwe, O. K. U., Sachi, A. & Marras, A. E. Unraveling the Folding Dynamics of DNA Origami Structures. *Small* **21**, e04855 (2025).](https://www.zotero.org/google-docs/?0TdbYp) 

# Buffer salt concentrations

DNA origami is folded in salt containing buffers, most commonly Mg\+2. The cations are required to stabilize DNA duplexes, as DNA strands electrostatically repel each other in the absence of sufficient stabilizing ions. Usually MgCl2 is added between 5-20mM, however the exact value depends on the structure. Variables affecting the optimal  MgCl2 concentration include helical packing density, scaffold concentrations, staple crossover routing, and more. For most origami we recommend exploring synthesis yield at least within the 5-20mM MgCl2 range. For some applications, magnesium free buffers may be required. For these applications researchers have two options. Structures can be folded using high concentrations of monovalent cations (like Na\+ or K\+) as a replacement[1](https://www.zotero.org/google-docs/?daKw2u), or structures can be folded in magnesium buffers then buffer-switched into Mg free buffers. To replace MgCl2, usually monovalent cations in the hundreds of millimolar concentration range is required. One advantage of removing MgCl2 from your buffer is high concentrations of divalent cations can induce aggregation of origami[2](https://www.zotero.org/google-docs/?W8ePwy).

**References:**  
[1\.](https://www.zotero.org/google-docs/?RLl3La)	[Martin, T. G. & Dietz, H. Magnesium-free self-assembly of multi-layer DNA objects. *Nat Commun* **3**, 1103 (2012).](https://www.zotero.org/google-docs/?RLl3La)   
[2\.](https://www.zotero.org/google-docs/?RLl3La)	[Ke, Y., Voigt, N. V., Gothelf, K. V. & Shih, W. M. Multilayer DNA Origami Packed on Hexagonal and Hybrid Lattices. *J. Am. Chem. Soc.* **134**, 1770–1774 (2012).](https://www.zotero.org/google-docs/?RLl3La) 

# Staple : Scaffold ratio

When synthesizing a scaffolded DNA nanostructure, DNA staples are typically added in a 5-10x molar excess. This excess helps drive the formation to completion and minimize the number of unoccupied scaffold sites. Even with a 10x excess of staples, incorporation of a given staple has been found to be between 48-95%[1](https://www.zotero.org/google-docs/?UvZuVa). Using an even higher excess of staples could increase the percentage. However, an increase in staple excess comes with a higher price of synthesis. To reduce the cost, recent work has explored reusing excess staple oligonucleotides[2](https://www.zotero.org/google-docs/?HDEUKR). Thus, when synthesizing a new nanostructure it is important to optimize the staple:scaffold ratio to ensure high staple incorporation efficiency without driving the cost of synthesis excessively high.

**References:**  
[1\.](https://www.zotero.org/google-docs/?M4XOlv)	[Strauss, M. T., Schueder, F., Haas, D., Nickels, P. C. & Jungmann, R. Quantifying absolute addressability in DNA origami with molecular resolution. *Nat Commun* 9, 1600 (2018).](https://www.zotero.org/google-docs/?M4XOlv)   
[2\.](https://www.zotero.org/google-docs/?M4XOlv)	[Reusing excess staple oligonucleotides for economical production of DNA origami | Nucleic Acids Research | Oxford Academic. https://academic.oup.com/nar/article/53/11/gkaf527/8166789.](https://www.zotero.org/google-docs/?M4XOlv) 

# PAGE

Polyacrylamide gel electrophoresis (PAGE) is commonly used for the separation of DNA strands and complexes. For DNA nanotechnology, it is a critical characterization tool for small DNA structures[1](https://www.zotero.org/google-docs/?k9hTg2), but less useful for large DNA origami structures. PAGE gels have smaller pore sizes than agarose gel electrophoresis which gives them higher resolution for separating DNA complexes of small molecular weight changes. However for large DNA complexes \>1000nts, the pores are too small for the DNA to enter and migrate making separation impossible.

There are two main classes of PAGE gels: Native PAGE and denaturing PAGE. Native PAGE is used for separating DNA strands or complexes of different sizes, shapes, or charges. They can be used to determine successful assembly and yield of small multi-strand complexes like DNA tetrahedrons[1](https://www.zotero.org/google-docs/?GXcCa6) or 6 strand nanopores[2](https://www.zotero.org/google-docs/?XvLdKv). They can also determine hybridization of two strands together or be used to monitor effectiveness of strand displacement reactions. Another critical application of PAGE is determining whether DNA was successfully attached to a functional unit like a protein. Denaturing PAGE is PAGE run in the presence of urea. This is rarely used in DNA nanotechnology as the urea can disrupt the hydrogen bonding between base pairs. One use case is for ensuring staples are the expected length and no degradation or truncation products exist. The urea is useful in this case to disrupt any secondary structure that could affect the migration. 

An important consideration of both AGE and PAGE is to ensure the running buffer is compatible with your structure. If the nanostructure is unstable in the running buffer, it is liable to degrade during the gel run and provide misleading results. For this reason, Mg\+2 is commonly added to the running buffer.

**References:**  
[1\.](https://www.zotero.org/google-docs/?49KAwu)	[Patel, A., Valsangkar, V., Halvorsen, K. & Chandrasekaran, A. R. Purification of self-assembled DNA tetrahedra using gel electrophoresis. *Curr Protoc* 2, e560 (2022).](https://www.zotero.org/google-docs/?49KAwu)   
[2\.](https://www.zotero.org/google-docs/?49KAwu)	[Lanphere, C. *et al.* Design, assembly, and characterization of membrane-spanning DNA nanopores. *Nat Protoc* 16, 86–130 (2021).](https://www.zotero.org/google-docs/?49KAwu) 

# AGE

Agarose gel electrophoresis is commonly used to characterize DNA origami and DNA nanostructures on the MDa scale[1](https://www.zotero.org/google-docs/?0zJygt). Agarose gels of DNA origami can be used to characterize if and how well a DNA origami structure has formed. To determine whether a DNA origami structure has formed, it is important to run at least three wells. One well should consist of a DNA ladder to maintain consistency and comparability between runs. Another well should consist of only the DNA origami scaffold. Another well should be your synthesized DNA origami. The DNA origami well should have one clear band and it should migrate differently from your scaffold strand alone. Whether it migrates more or less than the scaffold depends on the shape of your origami. When staples are added in excess, they are present in the gel as a diffuse band at low molecular weights migrating further than scaffold and origami.

**References:**  
[1\.](https://www.zotero.org/google-docs/?bRXh2Z)	[Castro, C. E. *et al.* A primer to scaffolded DNA origami. *Nat Methods* 8, 221–229 (2011).](https://www.zotero.org/google-docs/?bRXh2Z) 

# Spin Filtration

Ultrafiltration is one of the most widely used purification methods for isolating DNA origami and large DNA nanostructures[1](https://www.zotero.org/google-docs/?QZJmch). Ultrafiltration uses a semipermeable membrane with a defined molecular weight cut off (MWCO) to separate molecules above and below the size threshold. Molecules larger than the MWCO are retained while molecules smaller than the MWCO flow through. For DNA origami, the objective of ultrafiltration is to separate intact DNA nanostructures from excess staples which are small and pass through the filter. Typically, 100kDa MWCO filters are used. Several rounds of ultrafiltration can be performed to increase purity, however recovery yield also decreases as successive rounds of filtration and washing are performed. When performing ultrafiltration, researchers run the risk of inducing aggregation[2](https://www.zotero.org/google-docs/?D9C6By). While ultrafiltration is being performed, buffers including MgCl\+2 and Tris flow through and your final volume is less than your initial volume. This results in an increase in concentration of your origami which makes inter-origami interactions more favorable. It is also important to keep in mind that ultrafiltration will not remove free scaffold, aggregated origami, or dimerized origami as these all lie above the MWCO and will be retained. When high molar excess of staples are added, the concentration of free scaffold is typically assumed to be negligible. For single origami nanostructures, mechanical shearing is highly unlikely. However, for multi-component assemblies, shearing becomes a larger concern and ultrafiltration may not be compatible with these larger complexes.

Ultrafiltration can also be used for buffer exchange. The Tris, EDTA, MgCl\+2, and/or other salts in your buffer will pass through the filter. By reconstituting the retentate in a new buffer and perform successive washing and reconstitution steps the original buffer and its contents can be diluted to negligible amounts. This can be useful when the optimal buffer for origami assembly is incompatible with downstream functional applications of the nanostructure.

After filtration it is important to once again characterize your sample. AGE can inform you whether your sample has aggregated, whether you have effectively removed excess staples, and whether you have retained your origami.

**References:**  
[1\.](https://www.zotero.org/google-docs/?ZQXVDc)	[Wagenbauer, K. F. *et al.* How We Make DNA Origami. *ChemBioChem* **18**, 1873–1885 (2017).](https://www.zotero.org/google-docs/?ZQXVDc)   
[2\.](https://www.zotero.org/google-docs/?ZQXVDc)	[Dey, S. *et al.* DNA origami. *Nat Rev Methods Primers* **1**, 13 (2021).](https://www.zotero.org/google-docs/?ZQXVDc) 

# PEG Precipitation

Polyethylene glycol (PEG) precipitation is another widely implemented method for DNA nanostructure purification[1](https://www.zotero.org/google-docs/?Mn7z1U). PEG precipitation works by excluded volume depletion. Briefly, PEG, a large and hydrophilic polymer, occupies significant solution volume and sterically excludes large DNA nanostructures from the same space as the PEG. This exclusion creates an osmotic pressure that concentrates the large nanostructures into a smaller volume and can precipitate them out of solution. DNA staples and salts are small enough such that they are not excluded by PEG and can occupy the same space, therefore they do not precipitate. Choosing the correct molecular weight PEG can affect your purification efficiency. PEG8k is a typical starting point for scaffolded origami around 4.5MDa. Similar to ultrafiltration, PEG purification will not remove aggregates or misassembled origami similar in size to the intended structure[2](https://www.zotero.org/google-docs/?BhWnYh).

When implementing PEG purification for your origami there are several variables that can be tuned to optimize purification. Adjusting the concentration of PEG, the centrifugation time, the molecular weight of PEG, and the number of cycles all affect the recovery yield and purification efficacy. Briefly:

1. **Increasing the concentration of PEG** too high can improve origami retention but also cause co-precipitation of staples with origami. **Decreasing the concentration of PEG** can lead to reduced origami retention but more complete removal of excess staples.  
2. **Reducing centrifugation time** can cause poor recovery yield due to incomplete precipitation of the nanostructures. **Increasing centrifugation time** can cause aggregation[3](https://www.zotero.org/google-docs/?oZ9Fe9).  
3. **Increasing the number of cycles** leads to a reduction in yield but an increase in purity[1](https://www.zotero.org/google-docs/?K1Mnss).

Another challenge of PEG purification is the difficulty in removing residual PEG. Residual PEG can be found in your final sample and can have downstream effects in subsequent experiments.

**References:**  
[1\.](https://www.zotero.org/google-docs/?zQIL7u)	[Stahl, E., Martin, T. G., Praetorius, F. & Dietz, H. Facile and Scalable Preparation of Pure and Dense DNA Origami Solutions. *Angew Chem Int Ed Engl* **53**, 12735–12740 (2014).](https://www.zotero.org/google-docs/?zQIL7u)   
[2\.](https://www.zotero.org/google-docs/?zQIL7u)	[Sheheade, B. *et al.* Self-Assembly of DNA Origami Heterodimers in High Yields and Analysis of the Involved Mechanisms. *Small* **15**, 1902979 (2019).](https://www.zotero.org/google-docs/?zQIL7u)   
[3\.](https://www.zotero.org/google-docs/?zQIL7u)	[Baptist, A. V. & Heuer-Jungemann, A. Lyophilization Reduces Aggregation of Three-Dimensional DNA Origami at High Concentrations. *ACS Omega* **8**, 18225–18233 (2023).](https://www.zotero.org/google-docs/?zQIL7u) 

# Gel Extraction

Gel extraction purifies DNA nanostructures based on electrophoretic mobility, not size like PEG purification and ultrafiltration do. This enables gel extraction to selectively purify correctly assembled DNA nanostructures from aggregates, free scaffold, excess staples, and even partially folded nanostructures. To perform gel extraction, researchers run an agarose gel as usual but load the wells with as much sample as possible. After the gel is run, the band corresponding to the origami is excised and then typically a crush-and-squeeze, freeze-and-squeeze, or a hybrid approach is used to elute the nanostructure from the agarose[1](https://www.zotero.org/google-docs/?8M2UqT).

Although this is considered the method that achieves the highest purity, gel extraction suffers from several limitations. The yield is typically much lower than other methods, and scaling to larger amounts of origami is more challenging. In addition, the time required is longer as gels are often run for over 1 hour. In addition, your use of DNA stain can affect the DNA structure[2](https://www.zotero.org/google-docs/?LFnfEn) and it is difficult to fully remove agarose from the final solution containing your origami.

**References:**  
[1\.](https://www.zotero.org/google-docs/?m2YtT6)	[Wagenbauer, K. F. *et al.* How We Make DNA Origami. *ChemBioChem* **18**, 1873–1885 (2017).](https://www.zotero.org/google-docs/?m2YtT6)   
[2\.](https://www.zotero.org/google-docs/?m2YtT6)	[Lee, J. Y., Kim, Y. & Kim, D.-N. Predicting the effect of binding molecules on the shape and mechanical properties of structured DNA assemblies. *Nat Commun* **15**, 6446 (2024).](https://www.zotero.org/google-docs/?m2YtT6) 

# Magnetic-Bead Purification

Magnetic bead purification[1](https://www.zotero.org/google-docs/?wVb7K6) is used, but less commonly, for DNA nanostructure purification. Two main approaches exist: (1) Streptavidin-biotin capture or (2) DNA handle capture. In the former method, your DNA nanostructure is designed to contain a biotin functionalized strand and in the latter the DNA nanostructure contains a staple extension complementary to an oligo on the magnetic bead. For both methods, the DNA nanostructure is mixed with and captured by magnetic beads. Multiple rounds of washing then removes unbound contaminants like unincorporated excess staples and free scaffold. Finally, the nanostructures are released from the bead into solution and collected. For DNA handle capture, nanostructures are released using toehold mediated strand displacement. For streptavidin-biotin capture, nanostructures can be released using excess free biotin in solution however this is inefficient. An alternative is using desthiobiotin oligos. Desthiobiotin has a lower affinity for streptavidin than biotin and is thus more efficiently displaced using free biotin[2](https://www.zotero.org/google-docs/?cxfBc8).

Magnetic bead purification is highly scalable and automatable, however it has many limitations. The cost per sample is high, non-specific adsorption to beads can lead to incomplete purification, and methods for elution from beads often require optimization.

**References:**  
[1\.](https://www.zotero.org/google-docs/?qzf6vz)	[Sequential Pull‐Down Purification of DNA Origami Superstructures \- Ye \- 2021 \- Small \- Wiley Online Library. https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202007218.](https://www.zotero.org/google-docs/?qzf6vz)   
[2\.](https://www.zotero.org/google-docs/?qzf6vz)	[Hirsch, J. D. *et al.* Easily reversible desthiobiotin binding to streptavidin, avidin, and other biotin-binding proteins: uses for protein labeling, detection, and isolation. *Analytical Biochemistry* **308**, 343–357 (2002).](https://www.zotero.org/google-docs/?qzf6vz) 

# Size-Exclusion Chromatography

Size exclusion chromatography (SEC) is a purification technique for achieving high purity of the DNA nanostructure[1](https://www.zotero.org/google-docs/?ilFtDM). Size exclusion chromatography separates molecules by hydrodynamic radius. This allows it to purify MDa scale DNA nanostructures from free DNA staples, from aggregates, and from dimers. Depending on the shape and flexibility of the nanostructure, it can also separate from free scaffold. Unlike PEG purification and ultrafiltration, SEC does not increase the concentration of your sample so it is less likely to induce aggregation.

Despite its powerful capabilities, SEC is not widely implemented for DNA nanostructure purification for several reasons. High resolution SEC requires expensive equipment and reagents, SEC dilutes the sample, and SEC is a single-sample purification method reducing speed of purification for batches of samples. 

**References:**  
[1\.](https://www.zotero.org/google-docs/?Li05cP)	[Ebrahimimojarad, A. *et al.* A Robust and Efficient Method to Purify DNA-Scaffolded Nanostructures by Gravity-Driven Size Exclusion Chromatography. *Langmuir* **40**, 8365–8372 (2024).](https://www.zotero.org/google-docs/?Li05cP) 

# AFM

Atomic force microscopy (AFM) is used for high resolution characterization of DNA nanoparticle’s structure. AFM measures the surface topography of DNA nanostructures “feeling” the nanostructures with an ultrafine tip (nanometer scale). AFM is capable of achieving subnanometer lateral and vertical resolution rendering it immensely powerful for obtaining single molecule images of nanostructures. AFM can image DNA nanostructures in dry or aqueous environments (including in the origami’s native buffer). Typically, AFM in liquid achieves higher resolution of DNA nanostructures. However, AFM requires the nanostructure to be adsorbed onto the surface (typically mica or glass) so the nanostructure’s state may be biased due to surface interactions[1](https://www.zotero.org/google-docs/?MImlrm). Interactions between the nanostructure and the cantilever can also cause damage to the structure which can make it challenging to distinguish misformed structures from well-formed structures damaged by the AFM. AFM is not susceptible to staining artifacts and can provide 3D information, two advantages when compared to negative stain transmission electron microscopy (TEM). However, AFM can distort the dimensions of DNA nanostructures due to edge effects[2](https://www.zotero.org/google-docs/?vv0ZYE) making it sometimes less powerful than TEM for accurately measuring the 2D dimensions of a nanostructure. 

AFM can also be used to monitor real-time dynamic changes using high-speed AFM (HS-AFM) and to measure mechanical properties of the nanostructure using force spectroscopy. 

**References:**  
[1\.](https://www.zotero.org/google-docs/?7t6fpo)	[Wei, B. *et al.* Design Space for Complex DNA Structures. *J. Am. Chem. Soc.* 135, 18080–18088 (2013).](https://www.zotero.org/google-docs/?7t6fpo)   
[2\.](https://www.zotero.org/google-docs/?7t6fpo)	[Kolbeck, P. J. *et al.* DNA Origami Fiducial for Accurate 3D Atomic Force Microscopy Imaging. *Nano Lett.* 23, 1236–1243 (2023).](https://www.zotero.org/google-docs/?7t6fpo) 

# TEM

Negative stain transmission electron microscopy (TEM) is a single-particle imaging method for DNA nanostructures[1](https://www.zotero.org/google-docs/?FILkyh). In negative stain TEM, DNA nanostructures are deposited onto a glow-discharged carbon coated TEM grid and then a stain with heavy metal salts (typically uranium acetate) is added. This stain surrounds the sample, however it is excluded from space occupied by the DNA nanostructures. This heavy metal stain is electron dense and strongly scatters electrons, while DNA is electron-sparse and is a weak scatterer. Therefore, DNA appears light against the dark, stained background. TEM can achieve lateral resolution around 1-3nm for single molecules, and averaging of thousands of particles can push resolution below 1nm. TEM is performed on dried samples which also distorts the structure of DNA compared to when it is hydrated, and additionally interaction with the grid can bias certain conformations of the nanostructure. Compared to AFM, TEM enables higher-output imaging and more images of individual nanostructures can be obtained in less time.

**References:**  
[1\.](https://www.zotero.org/google-docs/?loaCbd)	[Douglas, S. M. *et al.* Self-assembly of DNA into nanoscale three-dimensional shapes. *Nature* **459**, 414–418 (2009).](https://www.zotero.org/google-docs/?loaCbd) 

# Athena

Athena[1](https://www.zotero.org/google-docs/?oE30s4) is an open-source graphical user interface that performs automated sequence design of wireframe scaffolded 2D and 3D DNA origami. As input, Athena uses a geometric design file in the PLY file format with all vertices defined. Athena can implement wireframe designs with double helix or 6HB edges with constant or variable edge lengths. Athena’s output designs are compatible with Cadnano for further design customizability or oxDNA for *in silico* characterization.

**References:**  
[1\.](https://www.zotero.org/google-docs/?KQlfFO)	[Jun, H. *et al.* Rapid prototyping of arbitrary 2D and 3D wireframe DNA origami. *Nucleic Acids Res* **49**, 10265–10274 (2021).](https://www.zotero.org/google-docs/?KQlfFO) 

# \#-CAD

\#-CAD provides a graphical interface for facile design of crisscross megastructures available on macOS, Windows, and Linux or on the web[1](https://www.zotero.org/google-docs/?agLvLY). In addition, “crisscross” python API enables scriptable manipulation of megastructure design in a format compatible with \#-CAD.

**References:**  
[1\.](https://www.zotero.org/google-docs/?05NQka)	[Aquilina, M. *et al.* A computational framework for designing micron-scale crisscross DNA megastructures. 2026.01.23.701435 Preprint at https://doi.org/10.64898/2026.01.23.701435 (2026).](https://www.zotero.org/google-docs/?05NQka) 

# Braids

BRAIDS is an automated design pipeline for scaffold-free DNA wireframe nanostructures. BRAIDS is implemented as an Autodesk-Maya python script[1](https://www.zotero.org/google-docs/?hg6SD5).

**References:**  
[1\.](https://www.zotero.org/google-docs/?EL8502)	[Wang, W. *et al.* Automated design of scaffold-free DNA wireframe nanostructures. *Nat Commun* **16**, 4666 (2025).](https://www.zotero.org/google-docs/?EL8502) 