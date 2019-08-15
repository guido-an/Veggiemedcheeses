import React from "react"
import Layout from "../components/layout"
import hellenicLogo from "../images/hellenic-logo.png"
import akisPhoto from "../images/akis.jpg"

const Hellenic = () => (
  <Layout>
      <section className="partner-page-section container">
      <img src={hellenicLogo} alt="univpm-logo"/>
      <p className="website"><a href="http://excellence.minedu.gov.gr/thales/en/institutions/hellenic-agricultural-organization-demeter">www.elgo.gr</a></p>
      <p><em>Role in the project:</em></p>
      <p><strong>Department of Food Hygiene and Technology, Veterinary Research Institute, Hellenic Agricultural Organization, DEMETER (short name: DEMETER)</strong></p>
    <p>Veterinary Research Institute of Thessaloniki, established in 1997, is a research unit of the Hellenic Agricultural Organization DIMITRA (former NAGREF).<br/><br/> The main purpose of the Institute is conduction of research aiming to the: Food Microbiology and Food technology (with emphasis on milk and Dairy Products); food hygiene, quality and safety; Improvement of livestock production (productivity, farm  management,  sustainability); sustainable development, characterization and use of local animal genetic resources; Protection of public health; Disease prevention and control in farm animals; Improvement of reproductive performance (classical and biotechnological methods); Development of livestock systems, environmental protection, animal welfare and production of quality products; Toxicology of animals and feed.<br/><br/>
    In addition to their research activities the researchers:
    <ul>
<li>Provide scientific support to the Greek Ministry of Rural Development and Food</li>
<li>Participate in international Networks, Fora and Working Groups</li>
<li>Act as National Contact Points in European Scientific Committees</li>
<li>Participate in National Committees ((Ministry of Agriculture, Ministry of Health, Ministry of Development, National Drug Organization, etc.)</li>
<li>Provide support and services to farmers or/and their associations</li>
 <li>Organize or/and participate in training programs/seminars for students, scientists and farmers</li>
</ul>
Role in the project: will be leader of WP6 (all tasks) and will be involved in WP1 (tasks 1.2 and 1.4), WP5 (tasks 5.1, 5.2, 5.3, 5.4) and WP7 (all tasks) in a supportive role. 
Competencies and experience relevant to the project: quality and food safety and in particular hygiene of food of animal origin, food microbiology and biochemistry. Food technology and specifically processing, standardization, control the raw material and intermediate steps, check finished products, biochemical analyzes in animal systems and environment.
</p>
<div className="coordinator">

<p><strong>COORDINATOR and Principal Investigator of DEMETER</strong><br/>
Dr Akis Psomas<br/>
Email: psomas@vri.gr<br/>
Skype contact: akis32<br/>
Phone: +302310365390
</p>
<img src={akisPhoto} width="200px"/>

</div>
    </section>
      <style jsx="true">{`
          
          .website{
            text-align: center;
            position: relative;
            bottom: 15px
          }
          img{
              margin: 0 auto;
              display: block
          }
           p {
              color: #777 !important;
              line-height: 25px
          }
          .coordinator{
              text-align: center;
              margin-top: 80px
          }
          .hellenic-section li{
              list-style: circle
          }
        
          
          `}</style>
  </Layout>
)

export default Hellenic