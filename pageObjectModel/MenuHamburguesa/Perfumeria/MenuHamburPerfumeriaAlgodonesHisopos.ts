import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaAlgodonesHisopos extends BasePage {

    readonly ALGODONES_HISOPOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALGODONES_HISOPOS = this.page.locator('//* [@id="menu-item-category-algodones-hisopos"]')
        // Algodones e Hisopos
    }

    async clickPerfumeriaAlgodonesHisopos(): Promise<void> {
        await this.click(this.ALGODONES_HISOPOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaAlgodonesHisopos(): Promise<void> {
        await this.clickPerfumeriaAlgodonesHisopos()
    }
}
