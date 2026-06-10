import Image from "next/image";
import { ChallengesRail, type RailGroup } from "@/components/ChallengesRail";
import { PageIntro } from "@/components/PageIntro";

const railGroups: RailGroup[] = [
  {
    title: "Miscellaneous",
    items: [{ id: "beautiful-images", label: "Beautiful Images Competition" }],
  },
  {
    title: "Design Challenges",
    items: [
      { id: "most-rigid-structure", label: "Most rigid structure" },
      { id: "fluorescence-amplification", label: "Fluorescence amplification" },
      { id: "edge-codes-specificity", label: "Best specificity from edge codes" },
    ],
  },
  {
    title: "Coding Challenges",
    items: [{ id: "thermodynamics-model", label: "Thermodynamics model fitting" }],
  },
];

function ChallengeImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 600,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  if (!src) return null;

  return (
    <figure className="challenge-image">
      <Image src={src} alt={alt ?? ""} width={width} height={height} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export default function ChallengesPage() {
  return (
    <div className="challenges-page">
      <PageIntro
        title="Challenges"
        description="Open challenges for the DNA nanotechnology community, spanning imaging, design, and computational modeling."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Challenges" }]}
      />
      <section className="section">
        <div className="container challenges-layout">
          <article className="challenges-content">
            {/* ============================== */}
            {/*        MISCELLANEOUS           */}
            {/* ============================== */}
            <h2 className="challenge-group-title">Miscellaneous</h2>

            <ChallengeImage src="/challenges/img1_challenges.png" alt="Challenges intro" />
            <h3 id="beautiful-images" className="challenge-anchor">
              Beautiful Images Competition
            </h3>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-label">Category 1:</strong> AFM
              </li>
              <li>
                <strong className="challenge-label">Category 2:</strong> TEM
              </li>
              <li>
                <strong className="challenge-label">Category 3:</strong> Light microscopy (PAINT) and others
              </li>
            </ul>
            <p>
              <strong className="challenge-label">Inspiration:</strong>{" "}
              <a href="https://www.nikonsmallworld.com/" target="_blank" rel="noreferrer">
                https://www.nikonsmallworld.com/
              </a>
            </p>

            <h4 className="challenge-section-title">How Challenges Operate</h4>
            <p>
              Once a year we will solicit anyone in the DNA nanotechnology community to submit
              either (1) atomic force microscopy (AFM), (2) electron microscopy (EM), or (3)
              light microscopy (super-resolution) images of nucleic acid nanostructures.
            </p>

            <h4 className="challenge-section-title">How it will be scored</h4>
            <p>
              A panel of 5 independent judges consisting of graduate students, professors,
              postdocs, scientists, science communicators, or similar will judge the entries.
              Entries will be judged based on the following criteria:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">Technical merit</strong> — how well the
                entrant has utilized the instrument to achieve the best possible image.
              </li>
              <li>
                <strong className="challenge-sublabel">Information content</strong> — how
                informative the image is.
              </li>
              <li>
                <strong className="challenge-sublabel">Beautiful appearance</strong> — how
                visually stunning the image is.
              </li>
              <li>
                <strong className="challenge-sublabel">Novelty</strong> — how unique and
                original the image is.
              </li>
            </ul>
            <p>
              For each criteria, judges will rate an image on a scale of 0–10 with 10 being
              the highest and 0 being the lowest. By summing the score for each criteria, an
              image will have a score between 0 and 40 for each judge, 40 being the highest
              and 0 being the lowest. The image&rsquo;s final score will be the average of all
              the judges&rsquo; scores. In the case of a tie, judges will consider each image
              head to head with each judge deciding between the two images which they believe
              is most deserving of the award based on the 4 categories.
            </p>

            <h4 className="challenge-section-title">Examples</h4>
            <div className="challenge-image-row">
              <figure className="challenge-image">
                <Image
                  src="/challenges/img2_AFM.jpg"
                  alt="AFM image example 2"
                  width={298}
                  height={301}
                />
              </figure>
              <figure className="challenge-image">
                <Image
                  src="/challenges/img3_AFM.png"
                  alt="AFM image example 3"
                  width={45}
                  height={42}
                />
              </figure>
              <figure className="challenge-image">
                <Image
                  src="/challenges/img4_AFM.png"
                  alt="AFM image example 4"
                  width={424}
                  height={284}
                />
              </figure>
            </div>
            <p>
              AFM images from Tikhomirov et al. <em>Nature</em> 2017. Averaged TEM image from
              Ong et al. <em>Nature</em> 2017. DNA-PAINT image from Schnitzbauer et al.{" "}
              <em>Nature Protocols</em> 2017.
            </p>

            <h4 className="challenge-section-title">Reward structure</h4>
            <p>
              Many potential reward structures exist. Ordered by greatest incentive for entry,
              examples include:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">Financial Reward</strong> — Organizers
                can seek partnership with leading companies like Bruker for AFM, Thermo Fisher
                for EM, and Nikon for light microscopy. Companies could agree to provide
                financial support in return for the publicity. Alternatively, financial awards
                could be supplied from a grant.
              </li>
              <li>
                <strong className="challenge-sublabel">Journal or Conference Publication</strong>{" "}
                — Partnership could be sought with ACS Nano, Journal of Nanotechnology, Nature
                Nanotechnology, or other nanotechnology-focused journals to publish a short
                article consisting of the top images from the year of nucleic acid
                nanotechnology. Alternatively, images could be displayed at top
                nanotechnology conferences (DNA or FNANO) and entrants could be invited to
                share their work at the conference.
              </li>
              <li>
                <strong className="challenge-sublabel">Publicity / recognition</strong> —
                Display of winning images can be done on a public platform like X, Bluesky or
                LinkedIn with the winning entrants tagged. This provides a free way to reward
                winners by helping to grow their network.
              </li>
            </ul>

            {/* ============================== */}
            {/*       DESIGN CHALLENGES        */}
            {/* ============================== */}
            <h2 className="challenge-group-title">Design Challenges</h2>

            <ChallengeImage src="/challenges/img5_rigid.png" alt="Most rigid structure" />
            <h3 id="most-rigid-structure" className="challenge-anchor">
              Most rigid structure
            </h3>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1: 1D</strong> — Design a DNA origami
                with the greatest length and rigidity in one dimension that can be synthesized
                with high yield.
              </li>
              <li>
                <strong className="challenge-tier">Tier 2: 2D</strong> — Design a DNA
                nanostructure with greatest surface area (2D) and least fluctuations that can
                be synthesized with high yield.
              </li>
              <li>
                <strong className="challenge-tier">Tier 3: 3D</strong> — Design the 3D DNA
                origami with the greatest addressable surface area with the least structural
                fluctuations that can be synthesized with high yield.
              </li>
            </ul>

            <h4 className="challenge-section-title">How Challenges Operate</h4>
            <p>
              For each challenge, Tier 1 will be introduced first. Each challenge will be live
              for 3 months (subject to change) during which time entrants can submit up to 3
              designs each. Submissions will be limited to those utilizing the M13MP18
              scaffold. Designs can be submitted as oxDNA <code>.top</code> and{" "}
              <code>.dat</code> files or other common file formats compatible with conversion
              to oxDNA (ScadNano, CadNano, etc.).
            </p>

            <h4 className="challenge-section-title">Screening</h4>
            <p>
              All designs received will initially be screened for merit using oxDNA. From the
              screening, the top 3 designs will be chosen to be experimentally compared. Each
              tier will have different criteria for screening:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">1D Criteria</strong> — oxDNA will be
                used to measure the persistence length of each entry and the overall length of
                each origami. A score will be assigned for each origami corresponding to the
                persistence length in nanometers + the average measured length, thus equally
                weighting rigidity and length.
              </li>
              <li>
                <strong className="challenge-sublabel">2D Criteria</strong> — oxDNA will be
                used to measure the surface area of the 2D origami and also the structural
                fluctuations. Structural fluctuation will be measured as the average
                root-mean-square fluctuations of all nucleotides.
              </li>
              <li>
                <strong className="challenge-sublabel">3D Criteria</strong> — oxDNA will be
                used to measure the addressable surface area of the 3D origami and also the
                structural fluctuations. Addressable surface area is defined as a region with
                double-stranded DNA. Structural fluctuation will be measured as the average
                root-mean-square fluctuations of all nucleotides.
              </li>
            </ul>

            <h4 className="challenge-section-title">Experimental Validation</h4>
            <p>
              The top three designs for each tier will be evaluated as follows. Firstly,
              annealing will be tested with 3 different MgCl concentrations (5 mM, 12.5 mM,
              and 20 mM). Three annealing protocols will be tested with linear temperature
              ramps from 60 °C to 20 °C over 2 hours, 8 hours, and 16 hours. Staples will be
              added in 10× excess of the scaffold for all samples. In total, for each design 9
              different samples will be generated (3 annealing protocols × 3 MgCl
              concentrations). The yield of each origami sample will be evaluated using gel
              band intensity. From each design, the synthesis protocol achieving the highest
              yield will be selected for evaluation of challenge performance. Challenge
              performance will be evaluated as follows:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">1D Experimental Validation</strong> —
                Samples will all be deposited onto mica under identical buffer conditions and
                preparation conditions. For each sample, enough 5×5 µm images will be captured
                to image at least 50 origami total. The length and persistence length of each
                origami will then be evaluated from the AFM images. Average length and
                average persistence length will be determined for each design. This value will
                then be multiplied by the origami yield as determined by gel. This metric{" "}
                <code>[(Lp + L) × %yield]</code> will be used to determine the challenge winner.
              </li>
              <li>
                <strong className="challenge-sublabel">2D Experimental Validation</strong> —
                We will use DNA-PAINT to determine sample rigidity. Samples will all be
                deposited onto glass coverslips using biotin–streptavidin immobilization under
                identical buffer conditions and preparation conditions. For each sample, the
                origami undergoing testing will be co-incubated with a control sample to
                determine how much variance is from imaging conditions versus sample
                conformational flexibility. For each sample, enough images will be captured to
                obtain 100 DNA origami samples and 100 control samples. Pairwise distances
                will be calculated between each DNA docking site. The average absolute
                magnitude of the measured distance subtracted by the expected distance from
                DNA geometry alone will serve as the metric of flexibility. This value will
                then be multiplied by the origami yield as determined by gel. This metric{" "}
                <code>[Flexibility × %yield]</code> will be used to determine the challenge
                winner.
              </li>
            </ul>
            <p className="challenge-note">
              If available, structures will be characterized using CryoEM instead of
              DNA-PAINT.
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">3D Experimental Validation</strong> —
                Samples will all be deposited onto carbon-coated TEM grids under identical
                buffer conditions and preparation conditions. For each sample, the origami
                will be stained with Uranyl Acetate. For each sample, enough images will be
                captured to obtain 500 DNA origami samples. Structural averaging will then be
                performed and the experimental structure will be compared to the
                simulation-predicted structure. In addition, the per-pixel variance will
                report on the structural heterogeneity. The average per-pixel variance will be
                computed, and the percent difference of each origami dimension compared to the
                expected from DNA geometry will also be calculated. These values will then be
                multiplied by the origami yield as determined by gel. This metric{" "}
                <code>[%Variance × %Discrepancy × %yield]</code> will be used to determine the
                challenge winner.
              </li>
            </ul>
            <p className="challenge-note">
              If available, the structure will be characterized using CryoEM instead of TEM.
            </p>

            <h4 className="challenge-section-title">Reward structure</h4>
            <p>
              Many potential reward structures exist. Ordered by greatest incentive for entry,
              examples include:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-sublabel">Financial Reward</strong> — Organizers
                can offer financial awards supplied from a grant to be paid out to the contest
                winner.
              </li>
              <li>
                <strong className="challenge-sublabel">Position within the lab</strong> — The
                winner may be offered a temporary internship position within the organizing
                lab. During this time, the winner is expected to work with their designed
                origami to realize a practical application.
              </li>
              <li>
                <strong className="challenge-sublabel">Publication</strong> — The winner can
                be guaranteed authorship on a conference abstract or journal article including
                their origami.
              </li>
              <li>
                <strong className="challenge-sublabel">Publicity / recognition</strong> — The
                winner&rsquo;s design and corresponding images (AFM / DNA-PAINT / TEM) can be
                published on Bluesky or LinkedIn with the winning entrants tagged. This
                provides a free way to reward winners by helping to grow their network.
              </li>
            </ul>

            <ChallengeImage src="/challenges/img6_fluorescence.png" alt="Fluorescence amplification" />
            <h3 id="fluorescence-amplification" className="challenge-anchor">
              Fluorescence amplification with greatest sensitivity
            </h3>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1:</strong> Using DNA origami Book
                <ul className="challenge-list challenge-list-nested">
                  <li>Bond arrangement</li>
                  <li>Bond Sequence</li>
                </ul>
              </li>
              <li>
                <strong className="challenge-tier">Tier 2:</strong> Any DNA Origami
                nanostructure.
              </li>
            </ul>

            <h4 className="challenge-section-title">How Challenges Operate</h4>
            <p>
              <strong className="challenge-tier">Tier 1:</strong> Participants will be given a
              grid of 8×6 corresponding to the extensions on a single page of the DNA origami
              book. Participants will submit a 2D array in the shape of 8×6 with either 0, 1,
              2, or 3 in each position. 0 means no bond, 1 means weakest bond, 2 means
              moderately strong bond, 3 means strongest bond. Bond sequences will be made
              available to participants at the time of the competition. Participants can
              submit up to 3 submissions each. The DNA origami will be made to be responsive
              to a single 20 nt oligo sequence. The DNA origami book is a 16HB rectangular 2D
              origami nanostructure. The two &lsquo;pages&rsquo; of the book are separated
              using flexible ssDNA linkers between all 16 helices. On each page of the book
              are 48 sites which can contain extension sequences. The 48 sites were arranged
              such that protruding DNA extensions would face towards the extension on the
              other book. In this manner, complementary sequences on each face would cause the
              book to &lsquo;close&rsquo; with both &lsquo;pages&rsquo; bound together.
            </p>

            <h5 className="challenge-subsection-title">Example submission</h5>
            <ul className="challenge-list challenge-sequences">
              <li>
                <code>Seq 1 = AGCTA</code>
              </li>
              <li>
                <code>Seq 2 = GCATCCA</code>
              </li>
              <li>
                <code>Seq 3 = AGCGTAGGA</code>
              </li>
            </ul>
            <div className="challenge-table-wrap">
              <table
                className="challenge-table"
                aria-label="Example submission: 6 by 8 bond array"
              >
                <caption className="visually-hidden">
                  Bond strengths per extension site. 0 = no bond, 1 = weakest, 2 = moderate,
                  3 = strongest.
                </caption>
                <tbody>
                  {[
                    [1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 2, 0, 0, 3],
                    [0, 0, 2, 0, 0, 0, 3, 0],
                    [0, 0, 0, 0, 3, 0, 0, 0],
                    [0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 3, 0, 0],
                  ].map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((value, colIndex) => (
                        <td key={colIndex} data-bond={value}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="challenge-table-legend">
                <span className="challenge-bond-key" data-bond={0}>0</span> no bond
                <span className="challenge-bond-key" data-bond={1}>1</span> weakest
                <span className="challenge-bond-key" data-bond={2}>2</span> moderate
                <span className="challenge-bond-key" data-bond={3}>3</span> strongest
              </p>
            </div>

            <p>
              <strong className="challenge-tier">Tier 2:</strong> Submissions will be limited
              to those utilizing the M13mp18 scaffold. Designs can be submitted as oxDNA{" "}
              <code>.top</code> and <code>.dat</code> files or other common file formats
              compatible with conversion to oxDNA (ScadNano, CadNano, etc.). Participants can
              submit up to 3 submissions each. The DNA origami will be made to be responsive
              to a single 20 nt oligo sequence.
            </p>

            <h4 className="challenge-section-title">Screening</h4>
            <p>
              All designs received will initially be screened for merit using oxDNA. From the
              screening, the top 3 designs will be chosen to be experimentally compared. Each
              tier will have different criteria for screening:
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1:</strong> Designs will be input to
                oxDNA and Metadynamics will be used to sample conformational states of both
                low and high free energy. The effect of the target strand addition will be
                analytically accounted for using the WLC approximation. To rank submissions,
                we will calculate the distance between the center of mass of each DNA origami
                page in the average structure of the origami with and without the target
                strand.
              </li>
              <li>
                <strong className="challenge-tier">Tier 2:</strong> Designs will be input to
                oxDNA and Metadynamics will be used to sample conformational states of both
                low and high free energy. The effect of the target strand addition will be
                analytically accounted for using the WLC approximation. To rank submissions,
                we will calculate the distance between 8 extension sites in the average
                structure of the origami with and without the target strand.
              </li>
            </ul>

            <h4 className="challenge-section-title">Experimental Validation</h4>
            <p>The top three designs for each tier will be evaluated as follows.</p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1:</strong> The DNA origami designs
                will be synthesized in identical buffer conditions and purified using
                ultracentrifugation with 100 kDa filters. For each sample, 3 conditions will
                be run with three replicates each: (1) sample with target added in plate
                reader, (2) sample without target, (3) sample with target pre-added. The
                signal-to-noise ratio of the fluorescence assay will be the performance
                metric, the ratio will be defined as the percent change between sample 1 and
                sample 2. The highest scoring design will be the winner.
              </li>
              <li>
                <strong className="challenge-tier">Tier 2:</strong> The top three designs will
                be evaluated as follows. Firstly, annealing will be tested with 3 different
                MgCl concentrations (5 mM, 12.5 mM, and 20 mM). Three annealing protocols will
                be tested with linear temperature ramps from 60 °C to 20 °C over 2 hours, 8
                hours, and 16 hours. Staples will be added in 10× excess of the scaffold for
                all samples. In total, for each design 9 different samples will be generated
                (3 annealing protocols × 3 MgCl concentrations). The yield of each origami
                sample will be evaluated using gel band intensity. From each design, the
                synthesis protocol achieving the highest yield will be selected for
                evaluation of challenge performance. For each sample, 3 conditions will be run
                with three replicates each: (1) sample with target added in plate reader, (2)
                sample without target, (3) sample with target pre-added. The signal-to-noise
                ratio of the fluorescence assay will be the performance metric, the ratio
                will be defined as the percent change between sample 1 and sample 2. This
                value will then be multiplied by the origami yield as determined by gel. The
                highest scoring design will be the winner.
              </li>
            </ul>

            <h4 className="challenge-section-title">Reward structure</h4>
            <p>All design challenges will use the same reward structure.</p>

            <ChallengeImage src="/challenges/img7_specificity.png" alt="Best specificity from edge codes" />
            <h3 id="edge-codes-specificity" className="challenge-anchor">
              Best specificity from edge codes
            </h3>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1:</strong> Pairwise
              </li>
            </ul>

            <h4 className="challenge-section-title">How Challenges Operate</h4>
            <p>
              <strong className="challenge-tier">Tier 1:</strong> Participants will fill in 8
              one-dimensional arrays of 11 bits (0 or 1) where 0 is the presence of a bond and
              1 is the absence of a bond. This will correspond to a DNA origami tile edge
              where the sequences are provided to the participants ahead of the competition.
              The objective of the challenge is to design 8 pairwise interactions so that 16
              DNA origami tiles can be mixed together and only the 8 desired dimerizations
              will occur. Participants will be trying to maximize on-target dimerization and
              minimize off-target interactions. Participants can submit up to 3 submissions
              each.
            </p>

            <h4 className="challenge-section-title">Screening</h4>
            <p>
              All designs received will initially be screened for merit using oxDNA and a
              custom-built analysis pipeline. From the screening, the top 3 designs will be
              chosen to be experimentally compared.
            </p>
            <ul className="challenge-list">
              <li>
                <strong className="challenge-tier">Tier 1:</strong> Stabilities of each dimer
                will be estimated using the sum of the Gibbs free energy of association for
                all extensions included in the design. This will then be compared to the
                off-target energies of association between unwanted dimers. Off-target
                association energies will be calculated by pooling all extension sequences
                included for two tiles and estimating the sum of the Gibbs free energy using
                NUPACK. The design with the overall greatest differential (on-target
                stability − Maximum(off-target stability)) for all 8 pairs will be the highest
                scoring design. oxDNA can also be used by estimating the melting temperature
                of the on-target and off-target reactions. Designs with the greatest
                difference in on-target melting temperature compared to off-target will be the
                highest scoring design.
              </li>
            </ul>

            <h4 className="challenge-section-title">Experimental Validation</h4>
            <p>
              The Tikhomirov lab will synthesize the 16 tiles for each winning design. Tiles
              will all be synthesized in separate tubes under identical annealing and buffer
              conditions. After annealing, negation strands will be added to all tubes under
              identical conditions. Next, all 16 tiles will be mixed together in an equimolar
              ratio without any annealing. Each of the tiles will have a unique combination
              of extensions protruding from the face of the tile so that they will be
              distinguishable via AFM or DNA-PAINT. For each design, ten 5×5 µm images will be
              obtained using AFM. The yield of each dimerization reaction will be scored as{" "}
              <code># dimers / (# Monomer A + # Monomer B)</code>. The average yield of the 8
              reactions will be obtained. Off-target interactions will be penalized as follows:{" "}
              <code>(1 − # off-target dimers / # total dimers)</code>. The mean of these two
              averages will be the final score. The highest scoring design will be the winner.
            </p>

            {/* ============================== */}
            {/*       CODING CHALLENGES        */}
            {/* ============================== */}
            <h2 className="challenge-group-title">Coding Challenges</h2>

            <ChallengeImage src="/challenges/img8_thermodynamics.png" alt="Thermodynamics model fitting" />
            <h3 id="thermodynamics-model" className="challenge-anchor">
              Fitting a better model to thermodynamics dataset
            </h3>

            <h4 className="challenge-section-title">How Challenges Operate</h4>
            <p>
              For this challenge, participants will be provided access to the publicly
              available data from Tikhomirov lab detailing over 250 melting curves from DNA
              tile–tile dimers. Specifically, participants will have access to (1) ScadNano
              and oxDNA files, (2) all DNA sequences, (3) raw data from three replicates of
              melting curve per origami interface. Participants can then develop any
              predictive platform they desire. Examples include (1) ML-based, (2)
              physics-based, (3) simulation-based, (4) hybrid methods. Users will have 3
              months to make submissions and are allowed up to 3 submissions each. As input,
              each predictive model should take a 1D array of 22 DNA sequences.
            </p>

            <h4 className="challenge-section-title">Experimental Validation</h4>
            <p>
              While participants are building models, the Tikhomirov lab will experimentally
              determine the melting temperature of 50 new multivalent interfaces. This data
              will be used as a testing set for the submitted models. All submitted models
              will have their performance tested by asking the model to predict the melting
              temperature of these novel interfaces. They will be scored by the root-mean-square
              error of their predictions versus the experimental data. The model with the
              least error is the best performing model.
            </p>

            <h4 className="challenge-section-title">Reward structure</h4>
            <p>Reward structure is identical to the rigidity design challenges.</p>
          </article>

          <ChallengesRail groups={railGroups} />
        </div>
      </section>
    </div>
  );
}
