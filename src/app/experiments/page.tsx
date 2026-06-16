import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";

function Lk({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link href={to} className="experiments-inline-link">
      {children}
    </Link>
  );
}

export default function ExperimentsMainPage() {
  return (
    <>
      <PageIntro
        title="Designing DNA Nanostructures"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experiments" },
        ]}
      />

      <section className="section">
        <div className="container experiments-article">
          <article className="prose">
            <p>
              When we are designing new DNA nanostructures here are some useful tips and tricks
              we suggest you keep in mind.
            </p>

            <p>
              Before even beginning to design your DNA nanostructure it is important to keep in
              mind your final objective for the DNA nanostructure. DNA nanotechnology
              encompasses many different design frameworks:{" "}
              <Lk to="/experiments/structure-types/scaffolded-helical-bundles">
                Scaffolded helical bundles
              </Lk>
              ,{" "}
              <Lk to="/experiments/structure-types/scaffolded-wireframes">
                scaffolded wireframes
              </Lk>
              ,{" "}
              <Lk to="/experiments/structure-types/scaffold-free-wireframes">
                scaffold-free wireframes
              </Lk>
              , <Lk to="/experiments/structure-types/dna-bricks">DNA Bricks</Lk>,{" "}
              <Lk to="/experiments/structure-types/dna-slats">DNA Slats</Lk>, and{" "}
              <Lk to="/experiments/structure-types/small-dna-complexes">
                small multi-DNA complexes
              </Lk>
              .
            </p>

            <p>
              When deciding which of these methods to use, we ask ourselves several questions:
              (1){" "}
              <Lk to="/experiments/design-considerations/origami-size">
                What size-range do we want for our structure
              </Lk>
              , (2){" "}
              <Lk to="/experiments/design-considerations/rigid-vs-flexible">
                Do we need a rigid or flexible structure
              </Lk>
              , (3){" "}
              <Lk to="/experiments/design-considerations/yield">Do we need high-yield</Lk>, (4){" "}
              <Lk to="/experiments/design-considerations/budget">What is our budget</Lk>, (5){" "}
              <Lk to="/experiments/design-considerations/addressability">
                Do we value addressability
              </Lk>
              ?
            </p>

            <p>
              These are in addition to functional questions like: (1){" "}
              <Lk to="/experiments/design-considerations/living-materials">
                Are we interfacing with living materials
              </Lk>
              , (2){" "}
              <Lk to="/experiments/design-considerations/buffer">
                What buffer conditions do we require stability in
              </Lk>
              , (3){" "}
              <Lk to="/experiments/design-considerations/surface-vs-solution">
                Will these function in solution or on surfaces
              </Lk>
              , and many more questions to consider unique to your application.
            </p>

            <p>
              Once you have decided on what class of nanostructure you will design, many
              existing software have been developed to improve the ease of design.
            </p>

            <div className="experiments-table-wrap">
              <table
                className="experiments-table"
                aria-label="Nanostructure class to software mapping"
              >
                <thead>
                  <tr>
                    <th scope="col">Nanostructure Class</th>
                    <th scope="col">Software</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/scaffolded-helical-bundles">
                        Scaffolded helical bundles
                      </Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/cadnano">Cadnano</Lk> and{" "}
                      <Lk to="/experiments/software/scadnano">Scadnano</Lk>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/scaffolded-wireframes">
                        Scaffolded wireframes
                      </Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/athena">Athena</Lk>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/scaffold-free-wireframes">
                        Scaffold-free wireframes
                      </Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/braids">Braids</Lk>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/dna-bricks">DNA Bricks</Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/nanobricks">NanoBricks</Lk>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/dna-slats">Crisscross DNA Slats</Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/sharp-cad">#-CAD</Lk>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Lk to="/experiments/structure-types/small-dna-complexes">
                        Small DNA Complexes
                      </Lk>
                    </td>
                    <td>
                      <Lk to="/experiments/software/nupack">Nupack</Lk>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For all softwares, we recommend using{" "}
              <Lk to="/experiments/software/nupack">Nupack</Lk> to minimize the secondary
              structure of all oligos and{" "}
              <Lk to="/experiments/software/seqwalk">SeqWalk</Lk> to maximize sequence
              orthogonality. However, for scaffolded approaches it&rsquo;s important to note
              the designer has much less control over oligo sequences since you&rsquo;re
              limited to the complement of the chosen scaffold. For scaffolded origami
              approaches we recommend two additional tools for improving your design:{" "}
              <Lk to="/experiments/software/dnafold">dnafold</Lk> and{" "}
              <Lk to="/experiments/software/pyorigamibreak">pyOrigamiBreak</Lk>. Finally, for
              all approaches we recommend simulating your nanostructure with{" "}
              <Lk to="/experiments/software/oxdna">oxDNA</Lk> to better understand its
              stability and equilibrium structure.
            </p>

            <p>
              Now that you&rsquo;ve designed your nanostructure, it is time to order the
              oligos, synthesize, and characterize successful formation. Supplies like
              Integrated DNA Nanotechnologies (IDT), Twist Biosciences, and Eurofins Genomics
              all sell high-purity oligos.
            </p>

            <p>
              Once your oligos have arrived it is time to test the formation of your
              nanostructure and optimize its assembly. Typically, there are three main
              experimental variables we tune when optimizing assembly: (1){" "}
              <Lk to="/experiments/synthesis-variables/thermal-annealing-ramp">
                Thermal annealing ramp
              </Lk>
              , (2){" "}
              <Lk to="/experiments/synthesis-variables/buffer-salt-concentrations">
                Buffer salt concentrations
              </Lk>
              , and (3){" "}
              <Lk to="/experiments/synthesis-variables/staple-scaffold-ratio">
                Staple : Scaffold ratio
              </Lk>{" "}
              for scaffolded structures. Recommendations for each can be found at the links
              above!
            </p>

            <p>
              To first determine if a structure has folded and in what yield we use gel
              electrophoresis, either{" "}
              <Lk to="/experiments/purification/page">
                Polyacrylamide gel electrophoresis (PAGE)
              </Lk>{" "}
              for small structures or{" "}
              <Lk to="/experiments/purification/age">
                agarose gel electrophoresis (AGE)
              </Lk>{" "}
              for larger structures. For both techniques, we recommend always including a DNA
              ladder and for scaffolded origami, include a scaffold only control well. Without
              the scaffold only control well, it is easy to mistake an unfolded DNA scaffold
              for a DNA nanostructure band.
            </p>

            <p>
              Depending on your application, you may need your nanostructure to be purified
              from excess oligos or aggregates. Purification methods include{" "}
              <Lk to="/experiments/purification/spin-filtration">ultrafiltration</Lk>,{" "}
              <Lk to="/experiments/purification/peg-precipitation">
                Polyethylene glycol (PEG) precipitation
              </Lk>
              , <Lk to="/experiments/purification/gel-extraction">gel extraction</Lk>,{" "}
              <Lk to="/experiments/purification/magnetic-bead-purification">
                magnetic-bead purification
              </Lk>
              ,{" "}
              <Lk to="/experiments/purification/size-exclusion-chromatography">
                size-exclusion chromatography
              </Lk>
              , among many others. For simplicity and general effectiveness for megadalton
              sized nanostructures, we typically use spin filtration, although the optimal
              method will depend on your nanostructure. Thus, we recommend trying multiple
              purification methods for each origami depending on the equipment and expertise
              within your lab. For more information on the benefits and drawbacks of each
              approach please click the links above.
            </p>

            <p>
              Following purification, it is important to assess the recovery yield, the
              purity, and the impact of the purification on the structure. To achieve this we
              recommend again running gel electrophoresis with the purified samples. From the
              gel, you can determine if aggregates were removed, excess staples were removed,
              and if the purification damaged your structure or induced aggregation.
            </p>

            <p>
              The next step is to perform structural verification using high resolution
              imaging methods like{" "}
              <Lk to="/experiments/imaging-methods/afm">atomic force microscopy</Lk> or{" "}
              <Lk to="/experiments/imaging-methods/tem">transmission electron microscopy</Lk>
              . For the highest information content we recommend AFM for 2D structures and
              TEM for 3D structures. It is important to keep in mind that both of these
              methods are imaging nanostructures adsorbed onto a surface. Therefore, the
              imaged structures may differ from their solution-state form.
            </p>

            <p>
              For more in-depth tutorials and information, we highly recommend the following
              resources:
            </p>
            <ol className="references-list">
              <li>
                <strong>Overview of Experimental Procedure:</strong> K. F. Wagenbauer, F. A.
                S. Engelhardt, E. Stahl, V. K. Hechtl, P. Stömmer, F. Seebacher, L. Meregalli,
                P. Ketterer, T. Gerling, H. Dietz, ChemBioChem 2017, 18, 1873.
              </li>
              <li>
                <strong>Original Implementation of DNA Origami:</strong> Rothemund, P. Folding
                DNA to create nanoscale shapes and patterns. Nature 440, 297–302 (2006).{" "}
                <a
                  href="https://doi.org/10.1038/nature04586"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1038/nature04586
                </a>
              </li>
              <li>
                <strong>
                  Overview of designing, synthesizing, and characterizing DNA origami:
                </strong>{" "}
                Castro, C., Kilchherr, F., Kim, DN. et al. A primer to scaffolded DNA
                origami. Nat Methods 8, 221–229 (2011).{" "}
                <a
                  href="https://doi.org/10.1038/nmeth.1570"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1038/nmeth.1570
                </a>
              </li>
              <li>
                <strong>DNA Origami and its Applications:</strong> Dey, S., Fan, C., Gothelf,
                K.V. et al. DNA origami. Nat Rev Methods Primers 1, 13 (2021).{" "}
                <a
                  href="https://doi.org/10.1038/s43586-020-00009-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1038/s43586-020-00009-8
                </a>
              </li>
            </ol>
          </article>
        </div>
      </section>
    </>
  );
}
