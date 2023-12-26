import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaParlantesPortatiles extends BasePage {

    readonly PARLANTES_PORTATILES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARLANTES_PORTATILES =this.page.locator('//a [@id="menu-item-category-parlantes-portatiles"]')
    }

    async clickElectroTecnologiaParlantesPortatiles(): Promise<void> {
        await this.click(this.PARLANTES_PORTATILES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaParlantesPortatiles(): Promise<void> {
        await this.clickElectroTecnologiaParlantesPortatiles()
    }
}
