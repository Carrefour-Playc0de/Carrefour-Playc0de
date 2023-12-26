import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilInfantilesJuveniles extends BasePage {

    readonly INFANTILES_JUVENILES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INFANTILES_JUVENILES = this.page.locator('//a [@id="menu-item-category-infantiles-juveniles"]')
    }

    async clickBazarTextilInfantilesJuveniles(): Promise<void> {
        await this.click(this.INFANTILES_JUVENILES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilInfantilesJuveniles(): Promise<void> {
        await this.clickBazarTextilInfantilesJuveniles()
    }
}
