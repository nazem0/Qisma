import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessHelper } from '../../../../helpers/business-helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [RouterModule],
})
export class FooterComponent {
  // footerText: string;
  navLinks: { label: string; routerLink: string }[];
  constructor() {
    // this.footerText = `
    // This site is operated by Qisma AI, Inc., which is not a registered
    //   broker-dealer or investment advisor. Qisma AI, Inc. does not provide
    //   investment advice, endorsement or recommendations with respect to any
    //   properties listed on this site. Nothing on this website should be
    //   construed as an offer to sell, solicitation of an offer to buy or a
    //   recommendation in respect of a security. You are solely responsible for
    //   determining whether any investment, investment strategy or related
    //   transaction is appropriate for you based on your personal investment
    //   objectives, financial circumstances and risk tolerance. You should consult
    //   with licensed legal professionals and investment advisors for any legal,
    //   tax, insurance or investment advice. Qisma AI, Inc. does not guarantee any
    //   investment performance, outcome or return of capital for any investment
    //   opportunity posted on this site. By accessing this site and any pages
    //   thereof, you agree to be bound by the Terms of Service and Privacy
    //   Policy.All investments involve risk and may result in partial or total
    //   loss. By accessing this site, investors understand and acknowledge 1) that
    //   investing in real estate, like investing in other fields, is risky and
    //   unpredictable; 2) that the real estate industry has its ups and downs; 3)
    //   that the real property you invest in might not result in a positive cash
    //   flow or perform as you expected; and 4) that the value of any real
    //   property you invest in may decline at any time and the future property
    //   value is unpredictable. Before making an investment decision, prospective
    //   investors are advised to review all available information and consult with
    //   their tax and legal advisors. Qisma AI does not provide investment advice
    //   or recommendations regarding any offering posted on this website.Any
    //   investment-related information contained herein has been secured from
    //   sources that Qisma AI believes to be reliable, but we make no
    //   representations or warranties as to the accuracy or completeness of such
    //   information and accept no liability therefore. Hyperlinks to third-party
    //   sites, or reproduction of third-party articles, do not constitute an
    //   approval or endorsement by Qisma AI of the linked or reproduced
    //   content.`;
    this.navLinks =BusinessHelper.navLinks;
  }
}
